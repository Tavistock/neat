(ns neat.pool
  (:require [neat.genome :refer [same? genome crossover mutate]]))

;; NOTE: species is plural and singular, use spp and sp

(def default-settings
  {:stale-species 15
   :population 10
   :inputs 26 ;; stimuli + 1
   :outputs 12
   :max-nodes 200
   :crossover 0.5})

(def default-pool
  {:species []
   :generation 0
   :current-species 0
   :current-genome 0
   :frame 0
   :max-fitness 0
   :settings nil})

(def default-sp
  {:top-fitness 0
   :staleness 0
   :genomes []
   :avg-rank 0})



(declare add-genome)

(defn pool [settings]
  (assoc default-pool
         :settings settings
         :species (->> settings
                       :population
                       (range)
                       (map #(genome settings))
                       (reduce add-genome []))))

(declare cull cull-stale cull-weak fill-avg fill-rand)

(defn step
  [pool]
  (let [culled-pool (->> pool (cull false) cull-stale cull-weak)
        avg-children (fill-avg culled-pool)
        top-pool (cull true culled-pool)
        children (fill-rand top-pool avg-children)]
    (-> top-pool
        (update :species (fn [spp] (reduce add-genome spp children)))
        (update :generation inc))))

;; Cull

(declare staleness ranked avg-rank total-avg-rank)

(defn cull-stale [pool]
  (let [{:keys [max-fitness settings] spp :species} pool
        {:keys [stale-species]} settings
        survived (->> spp
                      (map staleness)
                      (filter
                       (fn [{:keys [staleness top-fitness]}]
                         (or (< staleness stale-species)
                             (>= top-fitness max-fitness)))))]
    (assoc pool :species survived)))

(defn cull [cut-to-one? pool]
  (let [survived (->> pool
                      :species
                      (map (fn [sp]
                             (let [half (Math.ceil (/ (count (:genomes sp)) 2))
                                   remaining (if cut-to-one? 1 half)]
                               (-> sp
                                   (update :genomes (partial sort-by :fitness >))
                                   (update :genomes (partial take remaining)))))))]
  (assoc pool :species survived)))

(defn cull-weak [pool]
  (let [pop (:population (:settings pool))
        ranked (-> pool ranked avg-rank)
        total (total-avg-rank ranked)
        survived (->> ranked
                      :species
                      (filter (fn [{:keys [avg-rank]}]
                                (>= (Math/floor (* (/ avg-rank total) pop)) 1))))]
    (assoc pool :species survived)))

;; Related to making genomes

(defn breed-child
  [sp settings]
  (letfn [(rand-genome [sp] (-> sp :genomes vec rand-nth))]
    (-> (if (< (rand) (:crossover settings))
          (let [g1 (rand-genome sp)
                g2 (rand-genome sp)]
            (crossover g1 g2 settings))
          (rand-genome sp))
        mutate)))

(defn fill-avg
  "breeds children that are above the average"
  [_]
  nil)

(defn rand-child
  [pool]
  (-> pool :species vec rand-nth (breed-child (:settings pool))))

(defn fill-rand
  "fills children coll up to population with rand-children
  NOTE: meant to be used on a pool with only one genome in each species"
  [pool children]
  (loop [children children]
    (if (< (+ (count children) (count (:species pool)))
           (get-in pool [:settings :population]))
      (recur (conj children (rand-child pool)))
      children)))

(defn add-genome [spp genome]
  (loop [acc []
         [sp & spp] spp]
    (if-not (nil? sp)
      (if (same? (get-in sp [:genomes 0]) genome)
        (concat (conj acc (update sp :genomes conj genome)) spp)
        (recur (conj acc sp) spp))
      (conj acc (assoc default-sp :genomes [genome])))))

;; Helpers

(defn most-fit [sp]
  (first (sort-by :fitness > (:genomes sp))))

(defn staleness [sp]
  (let [fittest (most-fit sp)]
    (if (> fittest (:top-fitness sp))
      (-> sp
          (assoc :top-fitness fittest)
          (assoc :staleness 0))
      (update sp :staleness inc))))

(defn sp-avg [sp]
  (let [genomes (-> sp :genomes)
        total (count genomes)
        sum (->> genomes (map :rank) (reduce +))]
    (assoc sp :avg-rank (/ sum  total))))

(defn fitness-vecs [pool]
  (->> (for [[sidx sp] (map-indexed vector (:species pool))]
         (for [[gidx genome] (map-indexed vector (:genomes sp))]
           [[sidx gidx] (:fitness genome)]))
       (apply concat)))

(defn vec-pool [pool]
  (update pool :species
          (fn [spp] (->> spp
                        (map (fn [sp] (update sp :genomes vec)))
                        vec))))

(defn ranked [pool]
  (let [ranks (->> pool
                   fitness-vecs
                   (sort-by second >) ;; REVIEW
                   (map first)
                   (map-indexed vector))
        pool* (vec-pool pool)]
    (reduce
     (fn [pool [rank [sp-n gnm-n]]]
       (assoc-in pool [:species sp-n
                       :genomes gnm-n
                       :rank] rank))
     pool*
     ranks)))

(defn avg-rank [pool]
  (update pool :species (partial map sp-avg)))


(defn total-avg-rank [pool]
  (->> pool :species (map :avg-rank) (reduce +)))

;; Test

(defn for-genome [pool func]
  (update pool :species (partial map (fn [sp] (update sp :genomes (partial map (fn [gnm] (func gnm))))))))

(defn rand-fitness [pool] (for-genome pool (fn [gnm] (assoc gnm :fitness (rand-int 1000)))))

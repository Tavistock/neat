(ns neat.pool
  (:require [neat.genome :refer [same? genome]]))

(def default-settings
  {:stale-species 15
   :population 10
   :inputs 26
   :outputs 12
   :max-nodes 200})

(def default-pool
  {:species []
   :generation 0
   :current-species 0
   :current-genome 0
   :frame 0
   :max-fitness 0
   :settings nil})

(def default-species
  {:top-fitness 0
   :staleness 0
   :genomes []
   :avg-rank 0})

(defn add-genome [species genome]
  (loop [acc []
         [sp & spp] species]
    (if-not (nil? sp)
      (if (same? (get-in sp [:genomes 0]) genome)
        (concat (conj acc (update sp :genomes conj genome)) spp)
        (recur (conj acc sp) spp))
      (conj acc (assoc default-species :genomes [genome])))))

(defn pool [settings]
  (assoc default-pool
         :settings settings
         :species (->> (:population settings)
                       (range)
                       (map #(genome settings))
                       (reduce add-genome []))))

(defn fitness-vecs [pool]
  (->> (for [[sidx species] (map-indexed vector (:species pool))]
         (for [[gidx genome] (map-indexed vector (:genomes species))]
           [[sidx gidx] (:fitness genome)]))
       (apply concat)))

(defn top [species]
  (first (sort-by :fitness > (:genomes species))))

(defn update-staleness [sp]
  (let [fitness (top sp)]
    (if (> fitness (:top-fitness sp))
      (-> sp
          (assoc :top-fitness fitness)
          (assoc :staleness 0))
      (update sp :staleness inc))))

(defn cull-stale [pool]
  (let [{:keys [max-fitness settings species]} pool
        {:keys [stale-species]} settings
        survived (->> species
                      (map update-staleness)
                      (filter
                       (fn [{:keys [staleness top-fitness]}]
                         (or (< staleness stale-species)
                             (>= top-fitness max-fitness)))))]
    (assoc pool :species survived)))

(defn cull-weak [pool])

(defn cull-species [species cut-to-one?]
  )

(defn ranked [pool]
  (let [ranks (->> pool
                  fitness-vecs
                  (sort-by second >) ;; REVIEW
                  (map first)
                  (map-indexed vector))]
    (reduce
     (fn [pool [rank [sp-n gnm-n]]]
       (assoc-in pool [:species sp-n
                       :genomes gnm-n
                       :rank] rank))
     pool
     ranks)))

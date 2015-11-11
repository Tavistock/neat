(ns neat.genome
  (:require [clojure.set :refer [union difference]]
            [neat.util :refer [rand-id]]
            [neat.settings :refer [delta default-mutate default-genome]]))

(defn base
  [settings mutates]
  (assoc default-genome
         :settings settings
         :max-neurons (:inputs settings)
         :mutate mutates))

(declare mutate base)

(defn genome
  ([settings] (genome settings default-mutate))
  ([settings mutates] (mutates (base settings mutates))))

(defn coin-flip []
  (rand-nth [true false]))

(defn rand-neuron [genes inputs? settings]
  (let [{:keys [inputs outputs max-nodes]} settings
        candidates (union
                    (into #{} (range inputs))
                    (into #{} (range max-nodes (+ max-nodes outputs)))
                    (->> genes
                         (map (fn [{:keys [into out]}] #{into out}))
                         (reduce union)))
        neurons (if inputs?
                  candidates
                  (difference candidates (into #{} (range inputs))))]
    (rand-nth (vec neurons))))

(comment (rand-neuron
          [{:into 8 :out 9}]
          false
          {:max-nodes 10 :inputs 3 :outputs 3}))

(defn contains-link?
  [genes {:keys [into out] :as link}]
  (->> genes
       (map (fn [gene] (and (= (:into gene) into)
                            (= (:out  gene) out))))
       (reduce (fn [l r] (or l r)))))

(defn mutate-link [genome force-bias?]
  (let [{:keys [settings genes]} genome
        n1 (rand-neuron genes true settings)
        n2 (rand-neuron genes false settings)
        neuron {:out n2
                :into (if force-bias? (:inputs settings) n1)
                :innovation (rand-id)
                :weight (- (* 4 (rand)) 2)
                :enabled true}]
    (if (contains-link? genes neuron)
      genome
      (update-in genome [:genes] conj neuron))))

(defn mutate-toggle [genome enable?]
  (let [{:keys [genes]} genome
        untoggled (->> genes
                       (filter #(not= (:enabled %) enable?))
                       (count))
        genome* (update-in genome [:genes] #(into [] %))]
    (if (= untoggled 0)
      genome*
      (loop []
        (let [n (rand-int (count genes))
              loc [:genes n :enabled]]
          (if (not= (get-in genome* loc) enable?)
            (update-in genome* loc not)
            (recur)))))))

(comment (mutate-toggle {:genes [{:enabled false} {:enabled true} {:enabled false}]} true))

(defn mutate-node [genome]
  (if (= (count (:genes genome)) 0)
    genome
    (let [n (rand-int (count (:genes genome)))
          gene (nth (:genes genome) n)
          new-max (inc (:max-neurons genome))
          loc [:genes n :enabled]]
      (if (not (get-in genome loc))
        genome
        (-> genome
            (update-in loc not)
            (assoc :max-neurons new-max)
            (update-in [:genes] conj
                       (merge gene {:out new-max
                                    :weight 1.0
                                    :innovation (rand-id)}))
            (update-in [:genes] conj
                       (merge gene {:into new-max
                                    :innovation (rand-id)})))))))

(defn mutate-point [genome]
  (let [{:keys [perturb step]} (:mutate genome)]
    (update-in genome [:genes]
               (partial map
                (fn [gene]
                  (update-in gene [:weight]
                             (fn [weight]
                               (if (< (rand) perturb)
                                 (+ weight (- (* (rand) step 2) step))
                                 (- (* (rand) 4) 2)))))))))

(defn scale-traits
  [mutate]
  (->> mutate
       (map (fn [[trait rate]]
              (if (coin-flip)
                [trait (* rate 0.95)]
                [trait (* rate 1.05)])))
       (into {})))

(defn looper [genome p func]
  (loop [genome genome, p p]
    (if (pos? p)
      (if (> p (rand))
        (recur (func genome) (dec p))
        (recur genome (dec p)))
      genome)))

(defn mutate [genome]
  (as-> genome $
   (update-in $ [:mutate] scale-traits)
   ((fn [genome]
     (if (< (rand) (get-in genome [:mutate :connections]))
       (mutate-point genome)
       genome)) $)
   (looper $ (get-in $ [:mutate :link])    #(mutate-link % false))
   (looper $ (get-in $ [:mutate :bias])    #(mutate-link % true))
   (looper $ (get-in $ [:mutate :node])    mutate-node)
   (looper $ (get-in $ [:mutate :enable])  #(mutate-toggle % true))
   (looper $ (get-in $ [:mutate :disable]) #(mutate-toggle % false))))

(defn disjunct
  "g1 and g2 are genes"
  [g1 g2]
  (let [set1 (->> g1 (map :innovation) (into #{}))
        set2 (->> g2 (map :innovation) (into #{}))
        diff1 (difference set1 set2)
        diff2 (difference set2 set1)]
    (/ (+ (count diff1) (count diff2))
       (max (count g1) (count g2)))))

(defn abs [n] (max n (- n)))

(defn weights
  [g1 g2]
  (let [innov-weight
        (->> g1
             (map (fn [gene] {(:innovation gene) (:weight gene)}))
             (reduce merge {}))]
    (loop [[sum coincident :as acc] [0 0]
           [gene & genes] g2]
      (if-not (nil? gene)
        (if-let [weight2 (get innov-weight (:innovation gene))]
          (let [sum* (+ sum (abs (- (:weight gene) weight2)))
                acc* [sum* (inc coincident)]]
           (recur acc* genes))
          (recur acc genes))
        (/ sum coincident)))))

(defn same?
  [{g1 :genes} {g2 :genes}]
  (< (+ (* (:disjunct delta) (disjunct g1 g2))
        (* (:weights delta) (weights g1 g2)))
     (:threshold delta)))

(defn crossover
  [g1 g2 settings]
  (if (> (:fitness g2) (:fitness g1))
    (crossover g2 g1 settings)
    (let [innov (->> (:genes g2)
                      (map #(hash-map (:innovation %) %))
                      (reduce merge))]
      (as-> (genome settings) $
           (reduce
            (fn [genome gene]
              (let [gene2 (get innov (:innovation gene))]
                (if (and gene2
                         (:enabled gene2)
                         (coin-flip))
                  (update genome :genes conj gene2)
                  (update genome :genes conj gene))))
            $
            (:genes g1))
           (assoc $ :mutate (:mutate g1))))))

(comment (crossover (genome) (genome) default-settings))

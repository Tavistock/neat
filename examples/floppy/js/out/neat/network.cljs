(ns neat.network
  (:require [neat.util :refer [sigmoid]]))

;; Api
#_(network genome settings) ;-> network
#_(step network input settings) ;-> next-network
#_(outputs next-network settings) ;-> output


(defn neuron []
  {:incoming []
   :value 0.0})

(defn neurons [inputs outputs max-nodes]
  (into [] (concat
            (map (fn [_] (neuron)) (range inputs))
            (map (fn [_] nil)      (range (- max-nodes inputs)))
            (map (fn [_] (neuron)) (range outputs)))))

(defn gene->neurons
  [neurons gene]
  (if (:enabled gene)
    (-> neurons
        (update (:out gene) (fn [out]
                              (-> (or out (neuron))
                                  (update :incoming conj gene))))
        (update (:into gene) (fn [in] (or in (neuron)))))
    neurons))

(defn network
  [genome {:keys [max-nodes inputs outputs] :as settings}]
  {:neurons (reduce
             gene->neurons
             (neurons inputs outputs max-nodes)
             (:genes genome))
   :settings settings})

(defn zip-inputs [neurons inputs]
  (reduce
   (fn [ns [k v]] (assoc-in ns [k :value] v))
   neurons
   (map vector (range) inputs)))

(defn scale [[gene other]]
    (* (:weight gene) (:value other)))

(defn score-neurons [neurons]
  (reduce
   (fn [neurons idx]
     (let [neuron (nth neurons idx)
           incoming (:incoming neuron)]
       (if (> (count incoming) 0)
         (assoc-in neurons [idx :value]
                   (->> incoming
                        (map #(vector % (nth neurons (:into %))))
                        (map scale)
                        (reduce +)
                        (sigmoid)))
         neurons)))
   neurons
   (range (count neurons))))

(defn step [network inputs]
  (let [inputs (conj (vec inputs) 1)
        settings (:settings network)]
    (if (not= (count inputs) (:inputs settings))
      (print "Incorrect number of neural network inputs.")
      (update network :neurons (fn [ns]
                                 (-> ns
                                     (zip-inputs inputs)
                                     (score-neurons)))))))

(defn outputs [{:keys [settings neurons] :as network}]
  (map
   (fn [{:keys [value]}] (if (> value 0) true nil))
   (take-last (:outputs settings) neurons)))

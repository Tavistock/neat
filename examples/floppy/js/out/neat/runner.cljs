(ns neat.runner
  (:require
   [cljs.core.async :refer [chan <!]]
   [neat.interaction :as i]
            [neat.network :as n]
            [neat.pool :as p]
            [neat.state :refer [app-state]])
  (:require-macros
   [cljs.core.async.macros :refer [go-loop]]))

(declare next-loc)

(defn runner
  [pool interactions]
  (let [interact (i/interact interactions)]
    (go-loop [pool pool
              loc [:species 0 :genomes 0]]
      (swap! app-state assoc :pool pool)
      (let [genome (get-in pool loc)
            network (n/network genome (:settings pool))]
        (swap! app-state assoc :loc loc)
        (let [fitness (<! (interact network))
              pool (update-in pool loc assoc :fitness fitness)
              next-loc (next-loc pool loc)]
          (if next-loc
            (recur pool next-loc)
            (recur (p/step pool) [:species 0 :genomes 0])))))))

(defn next-loc
  [pool [_ sp _ gn]]
  (if (get-in pool [:species sp :genomes (inc gn)])
    [:species sp :genomes (inc gn)]
    (if (get-in pool [:species (inc sp) :genomes 0])
      [:species (inc sp) :genomes 0]
      nil)))

(ns neat.interaction
  (:require [neat.network :as n]))

(def flappybird
  {:read nil
   :score nil
   :game-over? nil
   :start! nil
   :restart! nil
   :controls nil})

(defn runner
  [interaction]
  (let [{:keys [read score game-over? start! restart! controls]} interaction]
    (fn [network game]
      (do (start! game)
          (loop [cur-score 0
                 network network]
            (if (game-over? game)
              (do (restart! game)
                  cur-score)
              (let [inputs (read game)
                    network* (n/step network inputs)
                    outputs (n/outputs network*)
                    commands (->> (map #(if %1 %2 nil) outputs controls)
                                  (filter identity))]
                (do (dorun (map (fn [cmd] (cmd game)) commands))
                    (recur (score cur-score game) network*)))))))))


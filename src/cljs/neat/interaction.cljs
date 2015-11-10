(ns neat.interaction
  (:require [cljs.core.async :refer [timeout <! >!]]
            [neat.network :as n]
            [neat.state :refer [app-state]])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(def flappybird
  {:read nil
   :score nil
   :game-over? nil
   :start! nil
   :restart! nil
   :controls nil
   :commands nil})

(defn interact
  [interaction]
  (let [{:keys [wait commands
                read score
                game-over? start!
                restart! controls]} interaction]
    (fn [network]
      (go (<! (start!))
          (loop [cur-score 0
                 network network]
            (swap! app-state assoc :fitness cur-score)
            (if (game-over?)
              (do
                (<! (restart!))
                cur-score)
              (let [inputs (read)
                    network* (n/step network inputs)
                    outputs (n/outputs network*)
                      cmds (commands outputs controls)]
                (do (swap! app-state assoc :vision inputs)
                  (dorun (map #(%) cmds))
                      (<! (timeout wait))
                      (recur (score cur-score) network*)))))))))

(defn commands
  [outputs controls]
  (->> (map #(if %1 %2 nil) outputs controls)
       (filter identity)))

(defn debug-commands
  [o c]
  (do (prn o)
      (commands o c)))

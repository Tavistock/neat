(ns neat.flappy
  (:require [cljs.core.async :refer [chan timeout <! >!]]
            [neat.network :as n]
            [neat.interaction :as i]
            [neat.pool :as p]
            [neat.runner :as r])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(def settings
  {:stale-species 15
   :population 5
   :inputs 301
   :outputs 1
   :max-nodes 600
   :cross-over 0.5})

(defn flappy-read []
  nil)

(defn screen-click
  []
  (. js/window (screenClick)))

(def interactions
  {:read (fn [] (->> 300
                    (range)
                    (map #(rand-int 2))
                    vec))
   :score (fn [score] (inc score))
   :game-over? (fn [] js/dead)
   :start! #(go (<! (timeout 4000))
                (screen-click))
   :restart! #(let [node (. js/document (getElementById "replay"))]
                (go (<! (timeout 8500))
                    (. node (click))))
   :controls [screen-click]
   :commands i/commands
   :wait 500})

(if (js/document.getElementById "sky")
  (defonce run!! (r/runner (p/pool settings) interactions)))

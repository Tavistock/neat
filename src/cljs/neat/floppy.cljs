(ns neat.floppy
  (:require [cljs.core.async :refer [chan timeout <! >!]]
            [neat.network :as n]
            [neat.interaction :as i]
            [neat.pool :as p]
            [neat.runner :as r])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(def settings
  {:stale-species 15
   :population 300
   :inputs 301
   :outputs 1
   :max-nodes 600
   :cross-over 0.5})

(defn read []
  nil)

(defn screen-click []
  (. js/window (screenClick)))

(defn start! []
  (go (<! (timeout 2000))
       (screen-click)))

(defn restart! []
   (go (<! (timeout 3000))
       (.click (.getElementById js/document "replay"))))

(def interactions
  {:read (fn [] (->> 300 (range) (map #(rand-int 2)) vec))
   :score inc
   :game-over? #(identity js/dead)
   :start!   start!
   :restart! restart!
   :controls [screen-click]
   :commands i/commands
   :wait 500})

(if (js/document.getElementById "floppy")
  (defonce run!! (r/runner (p/pool settings) interactions)))

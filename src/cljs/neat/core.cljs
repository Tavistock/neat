(ns neat.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [neat.network :as n]
            [neat.genome :as g]
            [neat.pool :as p]
            [neat.interaction :as i]
            [neat.settings :as s]
            [neat.util :as u]
            ))

(comment (let [settings {:stale-species 15
                         :population 20
                         :inputs 5
                         :outputs 1
                         :max-nodes 20
                         :cross-over 0.5}
               interactions {:read (fn [_] [1 1 1 1])
                             :score (fn [cur _] (inc cur))
                             :game-over? (fn [_] (> (rand-int 10) 1))
                             :start! (fn [_] nil)
                             :restart! (fn [_] nil)
                             :controls [(fn [_] (prn "hello"))]}
               pool (p/pool settings)
               genome (get-in pool [:species 0 :genomes 0])
               network (n/network genome settings)
               runner (i/runner interactions)]))

(enable-console-print!)

(defonce app-state (atom {:text "Hello Chestnut!"}))

(defn main []
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/h1 nil (:text app)))))
    app-state
    {:target (. js/document (getElementById "app"))}))

(ns neat.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [neat.network]
            [neat.genome]
            [neat.pool]
            [neat.util]
            ))

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

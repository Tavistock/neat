(ns neat.core
  (:require
   [cljs.core.async :refer [chan <!]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [neat.network :as n]
   [neat.genome :as g]
   [neat.pool :as p]
   [neat.interaction :as i]
   [neat.settings :as s]
   [neat.runner :as r]
   [neat.flappy :as f]
   [neat.state :refer [app-state]]
   [neat.util :as u])
  (:require-macros
   [cljs.core.async.macros :refer [go-loop go]]))

(enable-console-print!)

(declare vision)

(defn main []
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/div nil
                   (dom/p nil (str "loc: " (clj->js (:loc app))))
                   (dom/p nil (str "current-fitness: " (:fitness app)))
                   (dom/p nil (str "generation: " (:generation (:pool app))))
                   (om/build vision {:vision (:vision app) :x 15})))))
    app-state
    {:target (. js/document (getElementById "app"))}))

(defn vision
  [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (dom/p nil "vision: ")
               (apply dom/div nil
                      (->> (:vision app)
                           (partition (:x app))
                           (map #(dom/p nil (clj->js %)))))))))

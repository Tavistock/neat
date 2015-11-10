(ns neat.core
  (:require
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [neat.network :as n]
   [neat.genome :as g]
   [neat.pool :as p]
   [neat.interaction :as i]
   [neat.settings :as s]
   [neat.runner :as r]
   [neat.floppy :as f]
   [neat.state :refer [app-state]]
   [neat.util :as u]))

(enable-console-print!)

(declare viz)

(defn main []
  (om/root
   viz
   app-state
   {:target (. js/document (getElementById "app"))}))

(defn vision
  [data]
  (dom/div nil
           (dom/p nil "Vision: ")
           (apply dom/div nil
                  (->> (:vision data)
                       (partition (:x data))
                       (map #(dom/p nil (clj->js %)))))))

(defn viz [app owner]
  (reify
    om/IRender
    (render [_]
      (let [loc (:loc app)
            [_ genome _ species] loc
            fitness (:fitness app)
            generation (:generation (:pool app))
            app-vision {:vision (:vision app) :x 15}]
        (dom/div nil
                 (dom/p nil (str "Current =>"))
                 (dom/p nil (str "Species: " species))
                 (dom/p nil (str "Genome: " genome))
                 (dom/p nil (str "Fitness: " fitness))
                 (dom/p nil (str "Generation: " generation))
                 (vision app-vision))))))

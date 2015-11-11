(ns neat.core
  (:require
   [om.core :as om :include-macros true]
   [sablono.core :as html :refer-macros [html]]
   [neat.pool :as p]
   [neat.runner :as r]
   [neat.floppy :as f]
   [neat.state :refer [app-state]]))

(enable-console-print!)

(def floppy? (js/document.getElementById "floppy"))

(if floppy?
  (defonce run!! (r/runner (p/pool f/settings) f/interactions)))

(declare hud)

(defn main []
  (om/root
   hud
   app-state
   {:target (. js/document (getElementById "app"))}))

(defn vision
  [data]
  (let [scale 5
        scaler (fn [n] (+ (* n scale) scale))
        type (fn [v] (condp = v
                      0 "zero"
                      1 "pos"
                      -1 "neg"))
        width (:x data)
        rows (->> (:inputs data)
                  (partition width)
                  (map-indexed vector))
        height (count rows)]
    (html [:p "Inputs: "
           [:svg {:class "vision" :width (scaler width)
                  :height (scaler height)}
            (for [[y row] rows]
                   (for [[x v] (map-indexed vector row)]
                     (let [[x y] (map scaler [x y])
                           class (type v)]
                       [:circle
                        {:cx x :cy y :r 2 :class class} nil])))]])))

(defn hud [app owner]
  (reify
    om/IRender
    (render [_]
      (let [{:keys [inputs outputs
                    loc fitness
                    pool]} app
            [_ sp-n _ gn-n] loc
            {:keys [generation species]} pool
            app-vision {:inputs inputs :x 15}]
        (html [:div
               [:p (str "Current =>")]
               [:p (str "Species: (" (inc sp-n) "/"(count species) ")" )]
               [:p (str "Genome: (" (inc gn-n) "/" (count (:genomes (nth species sp-n))) ")")]
               [:p (str "Fitness: " fitness)]
               [:p (str "Generation: " generation)]
               (vision app-vision)
               [:p (str "Outputs: " outputs)]
               [:p (str "Population: " (->> species
                                            (map (comp count :genomes))
                                            (reduce +)))]
               [:p (str "Max Fitness: " (->> species
                                             (mapcat :genomes)
                                             (map :fitness)
                                             (reduce max)))]
               ]
              )))))

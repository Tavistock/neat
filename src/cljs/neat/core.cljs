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
  (let [floppy-pool (p/pool f/settings)]
    (swap! app-state assoc :ui {:width 15 :scale 8 :frame 0})
    (defonce run!! (r/runner floppy-pool f/interactions))))

(declare hud)

(defn main []
  (om/root
   hud
   app-state
   {:target (. js/document (getElementById "app"))}))

(defn loc->grid [loc width height]
  (let [x* (-> loc (mod width))
        y* (-> loc (quot width))
        x  (+ x* (* width (quot y* height)))
        y  (-> y* (mod height))]
    [x y]))

(defn network-comp [data owner]
  (reify
    om/IRender
    (render [_]
      (let [{:keys [network ui]} data
            {:keys [width scale]} ui
            {:keys [neurons settings]} network
            {:keys [inputs max-nodes]} settings
            vision (dec inputs)
            scaler (fn [n] (+ (* n scale) scale))
            type (fn [v] (condp = (compare v 0) 0 "zero" 1 "pos" -1 "neg"))
            located (->> neurons (map :value) (map-indexed vector))
            height (-> vision (quot width))]
        (html
         [:svg {:class "vision"
                :width  (scaler (* width (inc (quot (count neurons) (* height width)))))
                :height (scaler height)}
          (for [[loc v] located]
            (let [[x y] (->> (loc->grid loc width height)
                             (map scaler))
                  class (type v)]
                  [:circle
                   {:cx x :cy y :r (quot scale 3) :class class}
                   nil]))])))))

(defn hud [app owner]
  (reify
    om/IRender
    (render [_]
      (let [{:keys [inputs outputs
                    loc fitness
                    pool network
                    ui]} app
            [_ sp-n _ gn-n] loc
            {:keys [generation species]} pool
            app-vision {:inputs inputs}]
        (html [:div
               [:p (str "Current =>")]
               [:p (str "Species: (" (inc sp-n) "/"(count species) ")" )]
               [:p (str "Genome: (" (inc gn-n) "/" (count (:genomes (nth species sp-n))) ")")]
               [:p (str "Fitness: " fitness)]
               [:p (str "Generation: " generation)]
               (om/build network-comp {:ui ui :network network})
               [:p (str "Outputs: " outputs)]
               [:p (str "Population: " (->> species
                                            (map (comp count :genomes))
                                            (reduce +)))]
               [:p (str "Max Fitness: " (->> species
                                             (mapcat :genomes)
                                             (map :fitness)
                                             (reduce max)))]
               [:p (str "frame:" (get-in app [:ui :frame]))]
               ])))))

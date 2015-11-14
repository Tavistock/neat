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

(defn classify
  [v]
  (if (nil? v) "nil"
      (condp = (compare v 0)
        0 "zero"
        1 "pos"
        -1 "neg")))

(defn link [[[x1 y1] [x2 y2] :as locs] weight]
  (html [:line {:key locs
                :x1 x1 :y1 y1
                :x2 x2 :y2 y2
                :class (classify weight)}]))

(defn node [[x y :as loc] scale value]
  (html [:rect {:key loc
                :x x :y y
                :width scale :height scale
                :class (classify value)}]))

(defn link-info
  [locations]
  (->> locations
       (mapcat
        (fn [[loc neuron]]
          (->> (:incoming neuron)
               (filter identity)
               (map
                (fn [income]
                  [[loc (:into income)] (:weight income)])))))))

(defn network-comp [data owner]
  (reify
    om/IShouldUpdate
    ;; updating this is expensive so do it every 5 frames
    (should-update [_ next-props _]
      (= (mod (:frame (:ui next-props)) 5) 0))
    om/IRender
    (render [_]
      (let [{:keys [network ui]} data
            {:keys [width scale]} ui
            {:keys [neurons settings]} network
            {:keys [inputs max-nodes]} settings
            column (dec inputs)
            scaler (fn [n] (+ (* n scale) scale))
            locations (map-indexed vector neurons)
            height (quot column width)
            links (link-info locations)
            total-width (* width (Math/ceil (/ (count neurons)
                                               (* height width))))
            scaled (fn [n](->> n
                              (mapcat (fn [x] (loc->grid x width height)))
                              (map scaler)
                              (partition 2)))]
        (html
         [:svg {:class "vision"
                :width  (+ scale (scaler total-width))
                :height (+ scale (scaler height))}
          (for [[loc neuron] locations]
            (let [[coord] (scaled (list loc))
                  value (:value neuron)]
              (node coord scale value)))
          (for [[locs weight] links]
            (let [scaled-locs (scaled locs)]
              (link scaled-locs weight)))])))))

(defn hud [app owner]
  (reify
    om/IRender
    (render [_]
      (let [{:keys [inputs outputs
                    loc fitness
                    pool network
                    ui]} app
            [_ sp-n _ gn-n] loc
            {:keys [generation species]} pool]
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

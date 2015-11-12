(ns neat.floppy
  (:require [cljs.core.async :refer [timeout <!]]
            [neat.interaction :as i]
            [neat.runner :as r])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(def settings
  {:stale-species 15
   :population 50
   :inputs 301
   :outputs 1
   :max-nodes 601
   :cross-over 0.5})

(defn locate
  [pipe]
  (let [pipe (aget pipe 0)
        left (.-offsetLeft pipe)
        top (-> pipe .-children (aget 0) .-style .-height (.slice 0 -2) js/window.parseInt)]
    [left top]))

(def block 21)
(def width (.-pipewidth js/window))
(def total-width 15) ;; blocks
(def height (.-pipeheight js/window))
(def total-height 20)

(defn see [left top width height repr]
  (let [top# (Math/floor (/ top block))
        height# (Math/floor (/ height block))
        bot# (- total-height (+ height# top#))
        left# (Math/floor (/ left block))
        width# (Math/floor (/ width block))
        right# (- total-width (+ left# width#))
        piped (take total-width
                    (concat (repeat left# 0)
                            (repeat width# repr)
                            (repeat right# 0)))
        unpiped (repeat total-width 0)]
    (if (> left# total-width)
      (repeat (* total-height total-width) 0)
      (->> (concat
            (repeat top# piped)
            (repeat height# unpiped)
            (repeat bot# piped))
           (reduce concat)))))

(defn see-pipe
  [left top]
  (see left top width height -1))

(defn see-floppy []
  (let [floppy (.getElementById js/document "player")
        left (.-offsetLeft floppy)
        left# (Math/floor (/ left block))
        top (.-offsetTop floppy)
        top# (Math/round (/ top block))
        location (+ (* top# total-width) left#)]
    (-> (repeat (* total-height total-width) 0)
         vec
         (assoc location 1))))

(def floor (concat (repeat (* (dec total-height) total-width) 0)
                   (repeat total-width -1)))

(defn complex [x y]
  (if (empty? y)
    x
    (map #(if (zero? %1) %2 %1) x y)))

(defn read []
  (let [pipes (.-pipes js/window)
        locations (js->clj (. pipes (map locate)))
        floppy (see-floppy)]
    (->> locations
         (map (fn [[left top]] (see-pipe left top)))
         (reduce complex floppy)
         (complex floor))))

(defn screen-click []
  (js/screenClick))

(defn start! []
  (go (<! (timeout 2000))
      (screen-click)))

(defn restart! []
  (go (<! (timeout 3000))
      (.click (.getElementById js/document "replay"))))

(def interactions
  {:read read
   :score inc
   :game-over? #(identity js/dead)
   :start!   start!
   :restart! restart!
   :controls [screen-click]
   :commands i/commands
   :wait 200})

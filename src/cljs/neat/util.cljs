(ns neat.util
  (:require [goog.string.StringBuffer]))

(defn uuid
  []
  (letfn [(f [] (.toString (rand-int 16) 16))
          (g [] (.toString  (bit-or 0x8 (bit-and 0x3 (rand-int 15))) 16))]
    (UUID. (.toString
            (goog.string.StringBuffer.
             (f) (f) (f) (f) (f) (f) (f) (f) "-" (f) (f) (f) (f)
             "-4" (f) (f) (f) "-" (g) (f) (f) (f) "-"
             (f) (f) (f) (f) (f) (f) (f) (f) (f) (f) (f) (f))))))

(defn sigmoid [x]
  (dec (/ 2 (+ 1 (Math.exp (* -4.9 x))))))

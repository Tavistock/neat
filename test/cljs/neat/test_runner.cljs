(ns neat.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [neat.core-test]))

(enable-console-print!)

(defn runner []
  (if (cljs.test/successful?
       (run-tests
        'neat.core-test))
    0
    1))

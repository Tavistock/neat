(ns neat.default)

(def delta
  {:disjunct 2.0
   :weights 0.4
   :threshold 1.0})

(def default-mutate
  {:connections 0.25
   :link 2.0
   :bias 0.4
   :node 0.5
   :enable 0.2
   :disable 0.4
   :step 0.1
   :perturb 0.90})

(def default-genome
  {:genes []
   :fitness 0
   :network {}
   :max-neurons (:inputs default-settings)
   :rank 0
   :mutate default-mutate
   :settings default-settings})


(def default-settings
  {:stale-species 15
   :population 10
   :inputs 26 ;; stimuli + 1
   :outputs 12
   :max-nodes 200
   :crossover 0.5})

(def default-pool
  {:species []
   :generation 0
   :current-species 0
   :current-genome 0
   :frame 0
   :max-fitness 0
   :settings nil})

(def default-sp
  {:top-fitness 0
   :staleness 0
   :genomes []
   :avg-rank 0})

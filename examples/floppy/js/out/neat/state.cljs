(ns neat.state)

(defonce app-state (atom {
                          :pool {}
                          :loc [:species 0 :genomes 0]
                          :fitness 0
                          :network {}
                          :ui {}
                          :status nil
                          }))

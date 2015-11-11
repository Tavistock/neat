# neat

Evolving neural networks in the browser!

Neat stands for NeuroEvolution of Augmenting Topologies which is a
technique for creating neural networks in 2002 by Ken Stanley. It is
a genetic programming algorithm that modifies the weights and the
topologies of the network.

My implementation makes a pool of genomes organized by species that
can be transformed into networks. These networks transform a vector
of inputs to vector of outputs.

An example is included that evolves a genome to play [floppy bird](http://localhost:10555/floppy).

![](floppy.gif)

Be warned it takes a few generations to stop hugging the roof!

Check out the tips for [development](DEVELOPMENT.md)

## License

Copyright (c) Travis McNeill. All rights reserved. The use and
distribution terms for this software are covered by the Eclipse
Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
which can be found in the file LICENSE at the root of this
distribution. By using this software in any fashion, you are
agreeing to be bound by the terms of this license. You must
not remove this notice, or any other, from this software.

Copyright © 2015 EPL 1.0

## Chestnut

Created with [Chestnut](http://plexus.github.io/chestnut/) 0.8.1 (96152fa3).

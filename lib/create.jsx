/*
This is about the beauty of structure. its the ability to create structure that makes us human. But, only the beautiful
structure sets us free.

We will bootstrap with a poor man version of spiceTime syntax created by es6 classes machinery.
The MiniNode will take us to the edge of functional programming beyond which is the realm of spiceTime and structured
programming.
Then, the MiniNode will be used to create the full monty Node which will extend MiniNode. while MiniNode implements only
the features needed for Node structure, the resulting structure of Node is very close to full syntax nirvana.
The distinctly missing parts are the use of spices, typing and config systems.
Still, spiceTime is a useful case of itself and a showcase of possible coding patterns.
The DRY principle is strictly enforced. Not a drop is spilled, but recycled and consumed

MiniNode is made of spice
Thyme, time, rhyme
And not a dime
*/

import topNode from './topNode';
const external=require('./external');
const util=require('./util')({external});

export default ({
    require:appTopRequire
})=>topNode({external,util})({appTopRequire}).invoke()

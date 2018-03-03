/*
First of all, this is about clarity.
We fight confusion by creating structure. Its the ability to create structure that makes us human.
But, only the beautiful structure sets us free.

We will bootstrap with a poor man version of spiceTime syntax.
The spaceTimeNode will take us to the edge of functional programming beyond which is the realm of spiceTime and structured
programming.
Then, Node of spiceTime will be created in a timely succession of extensions each utilizing the new syntax created by prev
extension. The structure of spiceTime is a useful case of itself showcasing how new coding patterns replace old patterns.

The DRY principle is strictly enforced. Not a drop is spilled, but recycled and consumed. Yet, the DRY principal is extended.
We dont speak until its time to speak - we speak at the right time at the right space.

spiceTime is made of spice
Thyme, time, rhyme
And not a dime
*/
import externals from './externals'
import utils$wrapped from './utils'
import descriptor$getObj$wrapped from './descriptor$getObj'
import dollar$class$wrapped from './dollar$class'
import node$class from './node$class'
import create from './create#get'
import localVacuum from './localVacuum#obj'

const {unwrap,me:utils}=utils$wrapped({
    externals:{...externals,
        topRequire:require
    }
})
const descriptor$getObj=unwrap(descriptor$getObj$wrapped)
const dollar$class=unwrap(dollar$class$wrapped)
export default (
    new dollar$class(descriptor$getObj)
).vacuum$seed(
    {externals,utils,...unwrap({localVacuum})}
).drop(
    {dollar$class,descriptor$getObj}
).populate(
    {node$class,create}
).create







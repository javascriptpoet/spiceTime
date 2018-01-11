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
import './node$class'
import './class$spice'
import './func$spice'
const externals=require('./externals')
const utils=require('./utils')({externals})
const {extendMe}=utils
const defineProps=extendMe({
    externals:extendMe(externals),
    utils:extendMe(utils)
})
const populate$getObj=require('./populate$getObj')(defineProps)()
const const$spice=require('./const$spice')(defineProps)()
const spaceTime=populate$getObj({
    spaceTime:{
        descriptor$getObj:require('./descriptor$getObj')(defineProps)({const$spice})
    },
    wrappedlocals:{
        class$spice:require('./class$spice'),
        get$spice:require('./get$spice'),
        func$spice:require('./func$spice')
    }}
)
export default ({fullName,require})=>{
    const {node$class}=spaceTime.$.evolve({
        topAppRequire:require
    }).$.populate({
        node$class:require('./node$class')
    })
    return new node$class({
        fullName,
        path: './' + fullName
    }).get({})
}







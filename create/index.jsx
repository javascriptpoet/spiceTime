/*
First of all, this is about clarity.
We fight confusion by creating structure. Its the ability to create structure that makes us human.
But, only the beautiful structure sets us free.

We will bootstrap with a poor man version of spiceTime syntax.
The spaceNode will take us to the edge of functional programming beyond which is the realm of spiceTime and structured
programming.
Then, Node of spiceTime will be created in a timely succession of extensions each utilizing the new syntax created by prev
extension. The structure of spiceNode is a useful case of itself showcasing how new coding patterns replace old patterns.

The DRY principle is strictly enforced. Not a drop is spilled, but recycled and consumed. Yet, the DRY principal is extended.
We dont speak until its time to speak - we speak at the right time at the right space.

spiceNode is made of spice
Thyme, time, rhyme
And not a dime
*/
const external=require('./#external');
const {extendMe,me:util}=require('./#util')({external});
const buildtimeProps=extendMe({util,external});
const spaceNode$getClass=require('./spaceNode$getClass')(buildtimeProps)();
const spiceNode$getClass=require('./spiceNode$getClass')(buildtimeProps)({spaceNode$getClass});

export default ({
    require:appTopRequire
})=>{
    const topNode=new spiceNode$getClass({
        appTopRequire:(path)=>appTopRequire((path==='./')?'./index':path)
    })({});
    topNode.invoke({})
}


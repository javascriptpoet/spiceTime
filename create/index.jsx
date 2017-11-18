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
import './node$class';
const external=require('./#external');
const {extendMe,me:util}=require('./#util')({external});
const buildtimeProps=extendMe({util,external});
const housedNodeSpec$getGetObj=require('./housedNodeSpec$getGetObj')(buildtimeProps)();
const spaceTimeNode=require('./spaceTimeNode$class')(buildtimeProps)();
const create=({fullName,
    creatorNode$class=spaceTimeNode,
    pBuildtimeProps=buildtimeProps,
    pSpace={create},
    require:appTopRequire
})=>{
    const path='./'+fullName;
    const {housedNodeSpec$getObj,
        me:boundCreatorNode$class
    }=creatorNode$class.extend$getClass({
        statik:{
            housedNodeSpec$getObj:housedNodeSpec$getGetObj({appTopRequire})
        }
    });
    const topNode=new boundCreatorNode$class({path,fullName,
        pNode$obj:{buildtimeProps},
        nodeSpec:housedNodeSpec$getObj({path})
    });
    return topNode.get({
        pSpaceTime:{...pSpace,time:{
            past:Object.assign([creatorNode$class],{
                supr:creatorNode$class
            })
        }}
    })
};
const node$class=create({require,
    fullName:'node$class'
});
return ({fullName, require})=>create({fullName,require,
    pBuildtimeProps:{util},
    creatorNode$class:node$class
})



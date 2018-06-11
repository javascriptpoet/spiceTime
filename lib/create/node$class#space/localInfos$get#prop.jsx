export default ({
    utils:{extendMe,monetize},
    externals:{_}
})=>({nameHandle$class,
    node:{require,
        vacuum:{flavors},
        constructor:Node,
        nodeSpec:{
            me:nodeSpec,
            $:{housedNames}
        },
    }
})=>{
    const localInfo$get=({node,nodeSpec,fullName,me:info})=>{
        const {flavorName,me:nameHandle}=new nameHandle$class(fullName)
        const {localInVacuum:selfInVacuum}=Object.assign(info,{nameHandle,
            localInVacuum:(flavorName==='present')?
                t.func(t.Object,t.func(t.Object,t.Any)).of(
                    nodeSpec || require(fullName)
                ):
                ()=>{
                    !node && Object.assign(info,{
                        node:new Node({nodeSpec,nameHandle,
                            pastNode:node
                        })
                    })
                    return (pastSpace)=>info.node.unspace({pastSpace})
                }
        })
        if(flavorName==='present' || flavorName==='future') vacuum.$.localInfos.$.assign({
           [`${flavorName}Info`]:info
        }) else {
            const {locaLInfos,$:{byInfo}}=vacuum.$
            byFlavor[fullName]=info
            locaLInfos[fullName]=info
            const flavor=flavors[fullName]
            if(flavor && flavor.selfPpopulate){
                info.selfPopulateSpace=flavor.selfPopulate({selfInVacuum,
                    pastVacuum:vacuum
                })
                info.isPopulated=true
            }
        }
    }
    const localInfos=monetize({}).$.assign({
        byInfo:monetize({}),
        presentInfo:{
            nameHandle:new nameHandle$class('#present'),
            localInVacuum:()=>()=>{}
        },
        futureInfo:{
            nameHandle:new nameHandle$class('#future'),
            localInVacuum:()=>({$:{present:pastPresent}})=>pastPresent
        }
    })
    housedNames.forEach(
        (housedChildFullName)=>childInfo$get(extendMe({
            fullName:housedChildFullName
        }))
    )
    _.each(
        nodeSpec,
        (homelessChildNodeSpec,homelessChildFullName)=>childInfo$get(extendMe({
            fullName: homelessChildFullName,
            nodeSpec: homelessChildNodeSpec
        }))
    )
    return childInfos
}
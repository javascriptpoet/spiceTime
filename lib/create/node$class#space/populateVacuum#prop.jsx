export default ({
    externals:{_},
    utils:{monetize}
})=>({
    node:{childInfos,
        vacuum:{me:vacuum,flavors},
        instance$get:node$get,
        me:pNode
    }
})=>()=>{
    const populateChild=({childInVacuum,fullName,
        nameHandle:{flavor:flavorName},
        me:childInfo
    })=>{
        const {populateParentSpace}=Object.assign(childInfo,{
            populateParentSpace:flavors[flavorName].populateParent({
                selfInVacuum:childInVacuum,
                pVacuum:vacuum
            })
        })
        !!populateParentSpace && childInfos.$.spaceInfos.$.assign({
            [fullName]:Object.assign(childInfo,{
                childInSpace:(pastSpace)=>childInVacuum()(pastSpace)
            })
        })
    }
    childInfos.$.assign({
        spaceChildInfos:monetize({})
    })
    _.each(
        childInfos,
        ({
            nameHandle:{flavor:flavorName},
            me:info
        })=>{
            (flavorName==='flavor') && populateChild(info)
        }
    )
    _.each(
        childInfos,
        ({
            nameHandle:{flavor:flavorName},
            me:info
        })=>{
            if(flavorName==='flavor')return
            populateChild(info)
        }
    )
}

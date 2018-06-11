export default ({nameHandle$class,
    utils:{dollar$class,extendMe,cast$get},
    externals:{_}
})=>function(localInfos){
    const {localInfos,path,vacuum}=this
    this.localInfos.$.$assign(_.mapObject(localInfos,(localInfo,fullName)=>{
        t.assert(!!localInfos[fullName], `node ${path}:local ${fullName} is being redefined`)
        const {nameHandle:{flavorName}}=(new dollar$class({
            container:info
        })).$assign({
            nameHandle:localInfo.nameHandle || new nameHandle$class(fullName)
        }).$$
        localInfos.$.byFlavor.$.defaults({
            [flavorName]:{}
        })[flavorName].$.assign({
            [fullName]:info
        })
        return localInfo
    }))
    return vacuum
}


    function (name$union, localInVacuum) {
    const {me:nameHandle,fullName,flavorName,firstName}=cast$get({
        object:(nameHandle)=>nameHandle,
        string:(fullName)=>new nameHandle$class(fullName)
    })(name$union)
    const {localInfos,vacuum}=this
    t.assert(!!localInfos[fullName], `node ${path}:local ${fullName} is being redefined`)
    const info = monetize({
        container:{localInVacuum,nameHandle}
    })
    localInfos[fullName]=info
    localInfos.$.byFlavor[flavorName][fullName] = info
    const selfPopulateVacuum=({info,
        flavor=vacuum.flavors[flavorName]
    })=>{
        !!flavor && flavor.selfPopulate && info.$.$assign({
            selfPopulateSpace: flavor.selfPopulate({
                pastVacuum: vacuum,
                selfInVacuum: info.localInVacuum
            })
        })
    }
    if (flavorName === 'flavor') {
        const flavor=vacuum.$.evolve('flavors').$.populate(fullName)[firstName]
        !!flavor.selfPopulate && _.each(
            localInfos.$.byFlavor[flavorName],
            (info)=>selfPopulateVacuum({info,flavor})
        )
    }else
        selfPopulateVacuum({info,
            flavor:vacuum.flavors[flavorName]
        })
    return info
}






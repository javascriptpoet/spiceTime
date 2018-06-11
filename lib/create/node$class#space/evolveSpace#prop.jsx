export default ({
    externals:{_}
})=>({
    node:{
        nameHandle:{flavor:flavorName},
        vacuum:{$:{childInfos:{$:{futureInfo,
            presentInfo:{nameHandle:{firstName:presentFirstName}}
        }}}}
    }
})=>({
    me:pastSpace,
    $:{past,
        present:pastPresent
    }
})=>{
    const space=pastSpace.$.evolve()
    !!presentFirstName && Object.defineProperties(space,{
        [presentFirstName]:{
            get:()=>space.$.present,
            set:(present)=>space.$.assign({present})
        }
    })
    if(flavorName==='future')
        past.unshift(pastPresent)
    else space.$.assign({
        past:[]
    })
    return space
}
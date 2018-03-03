import get$type from './get$type'

export default ({
    externals:{t,unwrap,dollar$mount}
})=>{
    const get=unwrap(get$type).of(
        ({tcombClass,tcombClassArgs$get,tClassArgs$types,typeDollar$getObj,typeStatiks$getFuncs,
            me:props
        })=>Object.assign(
            ({name})=>(...tClassArgs)=>{
                const tcombType = tType$get(...tArgs$wGet({name})(stArgs))
                return Object.assign(tType, {
                    ...sTypeStatiks$get({tType}),
                    $: dollar$getObj({tType,stArgs})
                })
            },
            {spec:sTypeSpec}
        )
    )
    return dollar$mount(get,{
        type:get$type
    })
}

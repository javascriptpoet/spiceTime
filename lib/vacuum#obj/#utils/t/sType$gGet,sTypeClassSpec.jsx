import tArr from './tArr'

export default ({
    externals:{unwrap,t}
})=> {
    const tArr = unwrap(tArr)
    const type = t.refinement(t.Function,(type)=>t.struct({
        is: t.func(t.Any, t.Boolean)
    })({...type}))
    const stArgs$types = t.list(type)
    const tArgs$types = stArgs$types
    const type$get = t.func(tArgs$types,type)
    const $ = t.Object
    const sType = t.refinement(type,(type)=>t.struct(
        {$},
        {defaultProps:{$:{}}}
    )({...type}))
    const dollar$getObj = t.func(t.struct({tType,stArgs$types}), $)
    const name$arg = tArr(
        [t.struct({
            name: t.maybe(t.String)
        })],
        {defaultArr: [{}]}
    )
    const tArgs$wGet = t.func(name$arg,
        t.func(
            t.struct({
                stArgs:tArr(stArgs$types)
            }),
            tArgs$types
        )
    )
    const sTypeStatiks$getFuncs=t.func(tType,t.dict(t.String,t.Function))
    const sTypeSpec = t.struct(
        {tType$get,tArgs$get,stArgs$types,dollar$getObj,sTypeStatiks$getFuncs},
        {defaultProps:{
            tArgs$get:(...stArgs)=>stArgs,
            sTypeStatiks$getFuncs:()=>({})
        }}
    )
    const sType$wwGet = t.func(sTypeSpec,
        t.func(name$arg,
            t.func(stArgs$types,sType)
        )
    )
    return sType$wwGet.of(
        ({tType$get,tArgs$wGet,stArgs$types,dollar$getObj,sTypeStatiks$getFuncs,
            me:sTypeSpec
        })=>Object.assign(
            ({name})=>(...stArgs)=>{
                const tType = tType$get(...tArgs$wGet({name})(stArgs))
                return Object.assign(tType, {
                    ...sTypeStatiks$get({tType}),
                    $: dollar$getObj({tType,stArgs})
                })
            },
            {spec:sTypeSpec}
        )
    )
}

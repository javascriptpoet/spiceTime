import commonSwitch from '../commonSwitch#getSwitch'

export default ({
    externals:{unwrap}
})=>(scope)=>(...sources)=>{
    scope.descriptors=sources.reduce(
        (descriptors,source)=>({
            ...descriptors,
            ..._.mapObject(unwrap(commonSwitch)()(source),
                (value,key)=>Object.getOwnPropertyDescriptor(source,key)
            )
        }),
        {}
    )
}
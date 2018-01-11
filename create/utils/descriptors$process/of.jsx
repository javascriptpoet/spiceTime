export default ()=>(scope)=>(...sources)=>{
    scope.descriptors=sources.reduce(
        (descriptors,source)=>({
            ...descriptors,
            ..._.mapObject(source,
                (value,key)=>Object.getOwnPropertyDescriptor(source,key)
            )
        }),
        {}
    )
}
export default ({externals:{_}})=>(target,source)=>Object.defineProperties(
    target,
    _.objectMap(
        source,
        (value,key)=>Object.getOwnPropertyDescriptor(source,key)
    )
)
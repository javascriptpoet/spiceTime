import extendMe from './extendMe'
export default ({externals:{_}})=>(source,each$getDescriptor)=>_.reduce(
    Object.getOwnPropertyDescriptors(obj),
    (target,descriptor,name)=>Object.defineProperty(
        target,
        each$getDescriptor(
            extendMe({externals})({...descriptor,name})
        )
    ),
    {}
)

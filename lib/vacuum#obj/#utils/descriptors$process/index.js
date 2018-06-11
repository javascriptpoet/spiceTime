import mount from './mount'
import filter from './filter'
import of from './of'

export default ({
    externals:{_,unwrap,typeofSwitch,extendMe}
})=>{
    const self$process=(descriptors)=>{
        const unevolvedScope=Object.defineProperties(
            unwrap({mount,filter,of}),
            _.mapObject(scopedLocals,(scopedLocal)=>({get:()=>scopedLocal(scope)}))
        )
        extendMe(unevolvedScope)
        const descriptors$cast=(descriptors)=>_.mapObject(
            descriptors,
            (descriptor)=>typeofSwitch({
                object:(descriptor)=>descriptor,
                function:(get)=>({get,
                    enumerable:true,
                    configurable:true
                }),
                other:(value)=>(({value,
                    enumerable:true,
                    configurable:true
                }))
            })(descriptor)
        )
        const scope=_.objectCreate(unevolvedScope,{self$process,
            descriptors:typeofSwitch({
                object:(descriptors)=>descriptors$cast(descriptors),
                function:(descriptors$getDescriptors)=>descriptors$cast(descriptors$getDescriptors())
            })(descriptors)
        })
        extendMe(scope)
    }
    return self$process
}
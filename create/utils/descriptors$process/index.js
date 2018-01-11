import mount from './mount'
import filter from './filter'
import of from './of'

export default ({externals:{_,me:externals}})=>{
    const self$process=(descriptors)=>{
        const unevolvedScope=Object.defineProperties({},_.mapObject(
            {mount,filter},
            (wrapped)=>({get:()=>_.once(wrapped)({externals})(scope)})
        ))
        unevolvedScope.me=unevolvedScope
        const scope=_.objectCreate(unevolvedScope,{self$process,descriptors})
        scope.me=scope
    }
    return self$process
}
export default ({utils:{_}})=>({
    scope:{me:pScope,$:p$},
    constructor:{dollar:{descriptor$getObj}}
})=>(wrappedLocals)=>Object.defineProperties(pScope,_.mapObject(wrappedLocals,
    (wrappedChild, firstName)=> {
        const {
            me:childScope,
            $:child$
        }=p$.evolve()
        Object.defineProperties(
            Object.assign(child$,{firstName,
                scratch:{}
            }),
            {
                self:{get:()=>pScope[firstName]},
                parent:{get:()=>p$.self},
                namesake:{get:()=>(p$.pScope || {})[firstName]}
            }
        )
        const childDescriptor=descriptor$getObj({
            scope:childScope,
            wrappedlocal:wrappedChild
        })
        delete child$.scratch
        return {...childDescriptor,
            configurable:true
        }
    }
))

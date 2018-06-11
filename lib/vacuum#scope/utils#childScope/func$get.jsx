export default ({
    externals:{_},
    utils:{extendMe},
})=>{
    const populate=({wrappedMethods,container})=>Object.defineProperties(container,_.mapObject(wrappedMethods,(wrappedMethod,name)=>({
        get:function(){return wrappedMethod(this)}
    })))
    const func$get=({supr,
        wrappedLocals:{func,
            statikMethods={}
        }
    })=>{
        return populate({
            wrappedMethods:{...supr$class,...statikMethods,
                supr:()=>supr$class,
                instance$get:(klass)=>(props)=>(new klass(props)),
                extend:({wrappedLocals})=>klass$get({wrappedLocals,
                    supr$class:self$class
                })
            },
            container:self$class
        })
    }
    return Object.assign(func$get,{populate})
}
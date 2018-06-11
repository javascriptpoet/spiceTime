export default ({
    externals:{_},
    utils:{extendMe},
})=>{
    const klass$get=({supr$class,
        wrappedLocals:{
            constructor=()=>(self$union)=>()=>{
                if(supr$class)self$union()
            },
            methods={},
            statikMethods={}
        }
    })=>{
        const populate=({wrappedMethods,container})=>Object.defineProperties(container,_.mapObject(wrappedMethods,(wrappedMethod,name)=>({
            get:function(){return wrappedMethod(this)}
        })))
        const self$class=extendMe(
            class extends (supr$class || class{}) {
                constructor(props) {
                    const self$get = (props)=> {
                        super(props)
                        if(supr$class)this.supr = extendMe(supr$class.prototype)
                        return extendMe(this)
                    }
                    constructor(
                        supr$class?self$get:self$get()
                    )(props)
                }
            }
        )
        populate({
            wrappedMethods:{...methods,
                assign:(self)=>(props)=>Object.assign(self,props)
            },
            container:self$class.prototype
        })
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
    return klass$get
}

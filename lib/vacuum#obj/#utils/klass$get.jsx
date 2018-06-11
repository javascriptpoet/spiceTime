import cast from './cast'
import ut from './ut'

export default ({
    externals:{_,t,extendMe}
})=> {
    const selfInstance = ut.struct({
        supr: t.maybe(t.Object)
    })
    const selfInstance$get = t.func([], selfInstance)
    const self$union = t.union(selfInstance, selfInstance$get)
    const constructor = t.Function
    const selfishConstructor = t.func(self$union, constructor)
    const constructor$union = t.union(constructor, selfishConstructor)
    const method = constructor
    const selfishMethod = t.func(selfInstance, method)
    const method$union = t.union(method, selfishMethod)
    const methods = t.dict(t.String, method$union)
    const statikMethod = method
    const selfishStatikMethod = t.func(ut.klass, statikMethod)
    const statikMethod$union = t.union(statikMethod, selfishStatikMethod)
    const statikMethods = t.dict(t.String, statikMethod$union)
    const props$type = struct({
        name:t.String,
        supr$class: ut.class,
        locals: t.struct(
            {constructor, methods, statikMethods},
            {
                defaultProps: {
                    constructor: (self$union)=>(selfInstance$get.is(self$union) && self$union()),
                    methods: {},
                    statikMethods: {}
                }
            }
        )
    },{defaultProps:{
        name:'klass',
        supr$class:class {
            assign(props){return Object.assign(this,props)}
            mount(descriptors){Object.defineProperties(this,descriptors)}
        }
    }})
    const selfishMethod$get = (method)=>method
    const selfish$method$cast = (method$union)=>cast([
        {fromT: selfishMethod, val$get:selfishMethod$get},
        {fromT: method, val$get:(method)=>(self)=>method.bind(self)},
        {val$get: selfishMethod$get}
    ])(method$union)
    const selfishMethods$cast = (methods$unions)=>_.mapObject(methods$unions,selfish$method$cast)
    self$func=t.func(props$type, ut.class).of(
        ({supr$class,
            name:klassName,
            locals:{methods, statikMethods, constructor}
        })=>_.compose(
            ({methods, statikMethods, constructor})=> {
                const installMethods = (methods, self)=>_.each(methods, (method, name)=>Object.defineProperty(self, name, {
                    get:_.once(
                        ()=>method(self)
                    )
                }))
                class self$class extends (supr$class || base$class) {
                    constructor(props) {
                        const self$get = (props)=> {
                            super(props)
                            if(supr$class)this.supr = extendMe(supr$class.prototype)
                            return extendMe(this)
                        }
                        const self = supr$class ? self$get : self$get()
                        constructor(
                            supr$class?self$get:self$get()
                        )(props)
                    }
                }
                installMethods(methods,self$class.prototype)
                installMethods(statikMethods,self$class)
                return extendMe(self$class)
            },
            ({statikMethods,
                me:selfishLocals
            })=>({...selfishLocals,
                statikMethods:{...statikMethods,
                    selfishMethods: ({supr = new ut.klass})=> {
                        const methods$get=(type)=>_.objectCreate(supr.selfishMethods[type],selfishLocals[type])
                        return {
                            methods:methods$get('methods'),
                            statikMethods:statikMethods$get('statikMethods')
                        }
                    },
                    klassName:()=>klassName,
                    [`klassName${$klass}`]:(klass)=>klass,
                    class$get:(supr$class)=>(props)=>self$func({...props,supr$class})
                }
            })
        )(extendMe({
            constructor: selfish$method$cast(locals.constructor),
            methods: selfishMethods$cast(locals.methods),
            statikMethods: selfishMethods$cast(locals.statikMethods)
        }))
        return self$func
    )
}

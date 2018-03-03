import arg$cast from './arg$cast#method'
import expand from './expand#method'
import evolve from './evolve#method'
import populate from './populate#method'
import monetize from './monetize#statikMethod'
import evolvingProps$expand from './evolvingProps$expand'

export default ({unvacuum,
    externals:{_},
    utils:{extendMe,base$class,me:utils}
})=>{
    utils.dollar$getClass=({
        containerDescriptor$getObj=({self$wrapped})=>({
            get:_.once(
                ()=>unvacuum(self$wrapped)
            )
        })
    })=>{
        const {arg$cast,expand,evolve,populate,monetize}=unvacuum({arg$cast,expand,evolve,populate,monetize})
        const dollar$class=class extends base$class {
            constructor({container,$={}}){
                super()
                this.assign({...$,container,
                    evolvingPropNames:[]
                })
            }
            arg$cast(...args){return arg$cast(...args).bind(this)}
            expand(...args){return expand(...args).bind(this)}
            evolve(...args){return evolve(...args).bind(this)}
            populate(...args){return populate(...args)}
            evolvingProps$expand(...args){return evolvingProps$expand(...args)}
            static monetize(...args){return monetize(...args).bind(this)}
        }
        return extendMe(
            Object.assign(dollar$class,{containerDescriptor$getObj})
        )
    }
}
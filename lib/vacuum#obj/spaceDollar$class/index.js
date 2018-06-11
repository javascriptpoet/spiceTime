import locals$get from './locals$get#method'
import expand from './expand#method'
import evolve from './evolve#method'
import populate from './populate#method'
import containerDescriptor$getObj from './containerDescriptor$getObj#method'
import expandEvolvingProps from './expandEvolvingProps#method'

export default ({unvacuum,
    externals:{_},
    utils:{extendMe,base$class,monetize}
})=>{
    const {
        expand,evolve,populate,locals$get,expandEvolvingProps
    }=unvacuum({
        expand,evolve,populate,locals$get,expandEvolvingProps
    })
    return class extends base$class {
        constructor({container,$={}}){
            super()
            this.assign({...$,container,
                evolvingPropNames:[],
                dollar$class:this.constructor
            })
            monetize({container,
                $:this
            })
        }
        expand(...args){return expand(this)(...args)}
        evolve(...args){return evolve(this)(...args)}
        populate(...args){return populate(this)(...args)}
        expandEvolvingProps(...args){return expandEvolvingProps(this)(...args)}
        locals$get(...args){return locals$get(this)(...args)}
        containerDescriptor$getObj(...args){return containerDescriptor$getObj(this)(...args)}
    }
}

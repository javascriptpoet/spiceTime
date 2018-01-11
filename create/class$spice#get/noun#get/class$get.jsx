export default ({
    utils:{descriptors$process}
})=>({base$class,
    hostSpaceTime:{
        wrappedLocals:{supr$class=base$class,constructor,methods={}},
        $:{unevolved:hostSpaceTime}
    }
})=>()=>class extends supr$class {
    constructor(...args) {
        const {
            supr,
            constructor:unwrappedConstructor,
            $:{scratch:{unwrappedMethods}}
        }=hostSpaceTime.$.evolve().$.populate({
            constructor, ...methods
        }).$.scratch$expand(
            ({$:{locals:unwrappedMethods}})=>({unwrappedMethods})
        ).$.supr$expand(
            (hostSpaceTime)=>({self:this})
        ).$.expand(
            (spaceTime)=>({
                supr: (...args)=>spaceTime.$.expand({
                    instance:super(...args)
                }).$.supr$expand({
                    proto:supr$class.constructor.prototype
                })
            })
        ).$.populate({...privates})
        descriptors$process(unwrappedMethods).mount(this.prototype)
        unwrappedConstructor ? unwrappedConstructor(...args) : supr()
    }
}



export default ({
    externals:{_}
})=>function(expander$union){
    const {evolvingPropNames,container,expand,
        constructor:dollar$class
    }=this
    expand(_.mapObject(
        _.pick(container,evolvingPropNames),
        (prop)=>prop.$.evolve()
    ))
    return dollar$class.monetize({
        container:Object.create(container),
        $:{...this,
            p$:this,
            pContainer:container
        }
    }).$.expand(expander$union)
}
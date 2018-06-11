export default ({
    externals:{_}
})=>({evolvingPropNames,container,expand,dollar$class,me:p$})=>(expander$union)=>{
    expand(_.mapObject(
        _.pick(container,evolvingPropNames),
        (prop)=>prop.$.evolve()
    ))
    return dollar$class({
        container:Object.create(container),
        $:{...p$,p$,
            pContainer:container
        }
    }).$.expand(expander$union)
}
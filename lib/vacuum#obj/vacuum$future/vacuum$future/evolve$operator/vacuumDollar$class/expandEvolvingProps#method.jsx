export default ({
    externals:{_}
})=>({evolvingPropNames,dollar$class,
    expand:{arg$cast,me:expand}
})=>Object.assign(
    (evolvingProps$union)=>_.each(
        arg$cast(evolvingProps$union),
        (evolvingProp,name)=>{
            evolvingPropNames.push(name)
            expand({
                [name]:new dollar$class({container:evolvingProp})
            })
        }
    ),
    {arg$cast}
)

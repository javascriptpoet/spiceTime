export default ({
    externals:{_}
})=>({evolvingPropNames,dollar$class,vacuum,
    expand:{arg$cast,me:expand}
})=>Object.assign(
    (evolvingProps$union)=>_.each(
        arg$cast(evolvingProps$union),
        (evolvingProp,name)=>{
            evolvingPropNames.push(name)
            expand({
                [name]:new dollar$class({container:evolvingProp,
                    $:{vacuum}
                })
            })
        }
    ),
    {arg$cast}
)

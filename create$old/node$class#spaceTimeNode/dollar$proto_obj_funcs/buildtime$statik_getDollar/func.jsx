export default ({
    external:{_},
    util:{extendMe}
})=>()=>(
    {mountNodes,
        nodeSpec:{nameHandle},
        childNodes:{present,future,...childNodes}
    },
    {myDollar$getObj}
)=>()=>{
    const dollar$get=(filter)=>_.reduce(
        childNodes,
        (childDollars,{
            get$getFunc:getChild,
            me:childNode,
            dollar$obj_funcs:{
                buildtime$getDollar:childDollar$get
            }
        })=>{
            const child$=childDollar$get()
            if(!filter(child$))return childDollars
            return {...childDollars,
                [childFirstName]:{...child$,
                    mount: ({into})=>mountNodes({
                        scope:into,
                        nodes:{childNode},
                        get:getChild({})
                    })
                }
            }
        },
        extendMe({})
    )
    return Object.assign(dollar$get,{...myDollar$getObj(),
        mount:({into,filter})=>_.each(
            dollar$get({filter}),
            ({mount})=>mount({into})
        )
    })
}
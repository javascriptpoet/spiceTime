export  default ({
    external:{_}
})=>()=>({mountNodes,
    childNodes:{present,future,...childNodes}
})=>(spaceTime)=>(filter)=>mountNodes({
    scope:{},
    nodes:_(childNodes).reduce(
        (nodes,{
            me:childNode,
            dollar$obj_func:{buildtime$getDollar:{myChildDollar$getObj}}
        },firstName)=>(
            filter(myChildDollar$getObj())?{...nodes,
                [firstName]:childNode
            }:nodes
        ),
        {}
    ),
    get:({get})=>get(spiceTime)
})
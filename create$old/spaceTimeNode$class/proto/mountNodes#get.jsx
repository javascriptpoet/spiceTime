export default ({
    external:{_},
    util:{extendMe}
})=>({
    childNodes
})=>({nodes,get,
    scope={}
})=>Object.defineProperties(extendMe(scope),
    _.reduce(nodes, (specs,childNode,firstName)=>{
        const set=(value)=>Object.defineProperty(scope,firstName,{value})
        return {...specs,
            [firstName]:{set,
                get:()=>{
                    const val=get({childNode})
                    set(val)
                    return val
                }
            }
        }
    },{})
)

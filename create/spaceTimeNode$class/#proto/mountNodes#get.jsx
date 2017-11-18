export default ({
    external:{_},
    util:{extendMe}
})=>({
    childNodes
})=>({
    nodeFlavor,get,
    nodes=childNodes[nodeFlavor],
    scope=extendMe({})
})=>Object.defineProperties(scope,
    _.reduce(nodes, (specs,childNode,firstName)=>({...specs,
        [firstName]:{
            get:get(childNode),
            set:(value)=>Object.defineProperty(scope,firstName,{value})
        }
    }),{})
)

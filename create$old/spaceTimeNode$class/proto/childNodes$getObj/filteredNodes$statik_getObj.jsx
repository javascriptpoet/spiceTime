export default ({
    external:{_}
})=>({
    path:pPath,
    me:pNode,
    constructor:{instance$get:node$get}
})=>(filter,nodeSpecs)=>_.reduce(
    nodeSpecs,
    (nodes,{
        me:nodeSpec,
        nameHandle:{firstName,fullName}
    })=>{
        if(filter(nodeSpec)){
            const {node}=Object.assign(nodeSpec,{
                node:node$get({pNode,nodeSpec,
                    path:pPath+'/'+fullName
                })
            })
            return {...nodes,
                [firstName]:node
            }
        }
        return nodes
    },
    {}
)

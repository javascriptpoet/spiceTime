export default ({appTopRequire,
    external:{_}
})=>({infos,
    node:{$me:pNode,getNode}
})=>({
    type:nodeType,
})=>_.reduce(
    infos,
    (nodes,{attrNode,nodeSpec,
        nameHandle:{$me:nameHandle,firstName,
            type:nameType
        }
    })=>{
        if (!attrNode && nodeType === nameType){
            return {...nodes,
                [firstName]:getNode({pNode,nodeSpec,nameHandle})
            }
        };
        return nodes
    },
    {}
)
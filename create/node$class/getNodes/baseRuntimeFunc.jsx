export default ({appTopRequire,
    external:{_,t}
})=>({infos,getNodes,
    node:{path,
        constructor:{attrNames}
    }
})=>()=>{
    const getNode=(attrName)=>{
        const nodes=getNodes({type:attrName});
        const firstNames=_.keys(nodes);
        t.assert(firstNames.length>1,`multiple instances of attrName=${attrName}. path=${path}`);
        return nodes[firstNames[0]]
    };
    return _.mapObject(attrNames,(attrName)=>getNode(attrName))
}
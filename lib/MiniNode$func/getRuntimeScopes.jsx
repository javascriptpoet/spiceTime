export default ({
    external:{_}
})=>({getScope,
    nodes:{
        runtime:runtimeNodes
    }
})=>({
    process:{
        scopes:pRuntimeScopes
    }
})=>{
    const getMyScope=(type)=>getScope({
        pScope:pRuntimeScopes[type],
        nodes:runtimeNodes[type]
    });
    return {
        time:getMyScope('space'),
        space:getMyScope('time')
    }
}
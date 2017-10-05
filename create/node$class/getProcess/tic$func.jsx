export default ()=>({getState,
    $me:process
})=>({props,
    timeNode:{
        getVal,processes,getRuntimeScopes,
    }
})=>{
    const {scopes}=Object.assign(process,{timeNode,
        scopes:getRuntimeScopes({process,args})
    });
    const state=scopes.time;
    timeline.push(state);
    timeNode.processes.push(state);
    process.state=state;
    getVal(scopes);
    return state
}
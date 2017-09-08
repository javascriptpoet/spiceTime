export default ()=>({getScope,
    nodes:{buildtime:{statik:statikNodes}},
    pNode:{buildtimeScopes:{external,util,
        statik:pStatikScopes
    }}
})=>()=>{
    const getStatikScope=(type)=>getScope({
        pScope:pStatikScopes[type],
        nodes:statikScopes[type]
    })
    return {external,util,
        statik:{
            space:getStatikScope('space'),
            time:getStatikScope('time')
        }
    }
}
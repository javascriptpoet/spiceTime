export default ()=>({
    nodeType,getScope,getRuntimeScopes,get$,
    nodes:{attrNodes:{futureNode}}
})=>({
    pRuntimeScopes,invokationProps,konstruktor,
    nodes:{
        runtime:runtimeNodes,
        attrNodes:{
            future:futureNode
        }
    }
})=>{
    const runtimeScopes=getRuntimeScopes({pRruntimeScopes,invokationProps});
    konstruktor(
        Object.assign(runtimeScopes,{
            $:get$()
        })
    );
    const future=futureNode?(futureProps)=>futureNode.invoke({
        pRruntimeScopes:runtimeScopes
    })
    return Object.assign(

    )
}
export default ()=>({assign,space$getObj,time$getObj,
    node:{childNodes:{futureNode}},
})=>({
    invokationProps,pRuntimeProps
})=>{
    const {runtimeProps}=assign({runtimeProps:{}});
    const space=space$getObj();
    Object.assign(runtimeProps,{...space,space});
    const {present,
        me:time
    }=time$getObj();
    Object.assign(runtimeProps,{time})
    return futureNode?futureNode.invoke({
        pRuntimeProps:runtimeProps
    }):present
}
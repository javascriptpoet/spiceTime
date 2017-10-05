export default ()=>({
    props:{invokationProps,
        pRuntimeProps:{
            space:pSpace
        }
    },
    node:{scope$getObj}
})=>()=>scope$getObj({invokationProps,
    scopeFlavor:'space',
    pScope:pSpace
})

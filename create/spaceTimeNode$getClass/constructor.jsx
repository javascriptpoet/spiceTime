export default ()=>({
    firstName$getStr,buildtimeProps$getObj,
    childNodes$getObj:{housedNodeSpec$getObj,me:childNodes$getObj},
    assign$getObj:assign,
    constructor:{nodeFlavorNames$obj:{
        base$arr:baseFlavors,
        runtime$arr:runtimeFlavors
    }}
})=>({fullName,nameHandle,nodeSpec,
    path='./',
    pNode={}
})=>{
    const {nameHandle:{nodeFlavor}}=assign({pNode,path,
        nameHande:nameHandle || NameHandle(fullName)
    });
    const {isRuntimeNode}=assign({nodeType,
        isBaseNode:baseFlavors.contains(nodeFlavor),
        isRuntimeNode:runtimeFlavors.contains(nodeFlavor)
    });
    assign({firstName:firstName$getStr()});
    assign({nodeSpec:nodeSpec || housedNodeSpec$getObj({})});
    const {childNodes:{present:{
        nodeSpec:present$get
    }}}=assign(({childNodes:childNodes$getObj()}));
    const {bildtimeProps}=assign({bildtimeProps:getBuildtimeProps()});
    assign({
        present$get:isRuntimeNode?present$get(bildtimeProps):present$get
    })
}
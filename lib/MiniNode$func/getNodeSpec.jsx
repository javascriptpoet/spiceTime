export default ({
    util:{typeofSwitch},
})=>({
    path,nodeSpec,isNonStructuredNode,isNodeStat,
})=>()=>{
    if(nodeSpec)return nodeSpec;
    return typeofSwitch({
        function:(getVal)=>{
            isNonStructuredNode?getVal:{
                [`$val${isNodeStat?'$stat':''}`]:getVal
            }
        },
        object:({housedModuleNames})=>({housedModuleNames})
    })(appTopRequire(path))
}
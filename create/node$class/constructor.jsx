export default ({
    external:{_, t},
    $me:buildtimeProps
})=>({
    $me:self,
    appTopRequire,getFirstName,getNodeSpec,getBuildtimeProps,getNodes,
    constructor:{nodeTypesFunc:{ $me:nodeTypesFunc,
        structuredFunc:structuredNodeTypesFunc,
        baseFunc:baseNodeTypesFunc
    }}
})=>{
    const assign=(extender)=>Object.assign(self,extender);
    return ({fullName,nameHandle,isNodeStat,nodeSpec,
        pNode={}
    })=>{
        const {
            path:pPath='',
            nameHandle:{
                type:nodeType,
                $me:nameHandle
            }
        }=assign({pNode,
                nameHande:nameHandle || NameHandle(fullName)
            });
        const {path,isBaseNode}=assign({nodeType,isNodeStat,nodeSpec,
            isBaseNode:baseNodeTypesFunc('all').includes(nodeType),
            path:`${pPath?pPath+'/':''}${fullName}`
        });
        const {homelessModules,housedModuleNames}=assign({
            nodeSpec:getNodeSpec()
        });
        t.assert(
            isBaseNode && (!housedModuleNames) && (typeof homelessModules==='function'),
            `$${nodeType}${isNodeStat?'$stat':''} must be unstructured. path=${path}`
        );
        const {firstName}=assign({firstName:getFirstName()})
        if(!firstName)return;
        const {nodes:{
            baseFunc:{runtime:baseRuntimeNodes},
            attrNodes:{
                $me:attrNodes,
                initVal:{nodeSpec:initVal=()=>({})},
                back:{nodeSpec:back=()=>{}},
                konstructor:{nodeSpec:{konstructor=()=>{}}},
                val:{nodeSpec:{val}}
            }}
        }=assign(({
            nodes:getNodes()
        }));
        const {bildtimeProps}=assign({bildtimeProps:getBuildtimeProps()});
        assign(_.mapObject(baseRuntimeNodes,({node})=>!!node && node.nodeSpec(bildtimeProps)));
    }
}
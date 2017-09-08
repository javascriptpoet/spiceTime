export default ({appTopRequire,
    external:{_, t,
        $me:external
    }
})=>({
    $me:self,
    getFirstName,getNodeSpec,getBuildtimeProps,getNodes,
})=>{
    const assign=(extender)=>Object.assign(self,extender);
    return ({fullName,nameHandle,isNodeStat,nodeSpec,
        pNode={
            path:'.',
            scopes:{buildtime:pBuildtimeScopes},
            $me:pNode
        }
    })=>{
        const {
            type:nodeType,
            $me:nameHandle
        }=nameHandle || NameHandle(fullName);
        const {path,isNonStructuredNode}=assign({pNode,nameHandle,nodeType,isNodeStat,nodeSpec,
            isNonStructuredNode:['initVal','val','back'],
            path:`${pNode.path}/${fullName}`
        });
        const {homelessModules,housedModuleNames}=assign({
            nodeSpec:getNodeSpec()
        });
        t.assert(
            isNonStructuredNode && (!housedModuleNames) && (typeof homelessModules==='function'),
            `$${nodeType}${isNodeStat?'$stat':''} must be unstructured. path=${path}`
        );
        const {firstName}=assign({firstName:getFirstName()})
        if(!firstName)return;
        const {nodes:{
            statNode:{
                buildtimeProps:statBuildtimeProps,
            },
            attrNodes:{
                $me:attrNodes,
                initVal:{nodeSpec:initVal=()=>()=>({})},
                back:{nodeSpec:back=()=>()=>{}},
                konstructor:{nodeSpec:{konstructor=()=>()=>{}}},
                val:{nodeSpec:{val}}
            }}
        }=assign(({
            nodes:getNodes()
        }));
        const {bildtimeProps}=assign({bildtimeProps:getBuildtimeProps()});
        const unwrap=(wrapper)=>!!wrapper && wrapper(bildtimeProps);
        assign({
            initVal:unwrap(initVal),
            back:unwrap(back),
            konstructor:unwrap(konstructor),
            val:unwrap(val)
        });
    }
}
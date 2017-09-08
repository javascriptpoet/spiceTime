export default ({
    external:{_,t},
    util:{extendMe,getTransform}
})=>({
    node:{NameHandle,getNode,isNodeStatic,
        constructor:{tt},
        nodeSpec:{housedModuleNames,homelessModules},
        nameHandle:{
            firstName:myFirstName,
            name:myFullName
        },
        me:pNode
    }
})=>()=>{
    const addInfos=({infos,fullName,nodeSpec})=>{
        const {firstName,
            $me:nameHandle
        }=NameHandle(fullName);
        const addInfo=({nodeSpec,attrNode,
            nameHandle:{firstName,
                me:nameHandle
            }
        })=>Object.assign(infos,{
            [firstName]:{nameHandle,attrNode,childHomelessModules}
        });
        if(!firstName){
            const {nodeSpec,
                nameHandle:{$me:nameHandle,firstName,fullName},
                childHandler:{infos:boxedInfos},
                me:node
            }=getNode({fullName,pNode,nodeSpec});
            if(firstName) return addInfo({nameHandle,
                attrNode:node
            });
            return _.reduce(
                boxedInfos,
                (infos,{
                    $me:info,
                    nameHandle:extendeeNameHandle
                })=>addInfo({...info,
                    nameHandle:extendeeNameHandle.extend(nameHandle)
                }),
                {}
            )
        };
        return addInfo({nameHandle})
    };
    return {
        ...housedModuleNames.reduce(
            (infos,fullName)=>addInfos({infos,fullName}),
            {}
        ),
        ...reduce(
            homelessModules,
            (infos,homelessModule,fullName)=>addInfos({infos,fullName,
                nodeSpec:{
                    homelessModules:getTransform([
                        {
                            fromT:t.dict(t.String,tt.homelessModule),
                            toVal:(childHomelessModules)=>childHomelessModules
                        },
                        {
                            fromT:tt.getVal,
                            toVal:(getVal)=>({
                                $val:getVal
                            })
                        }
                    ])(homelessModule)
                }
            }),
            {}
        )
    }
}
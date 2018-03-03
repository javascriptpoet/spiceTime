export default ()=>(
    {isPresentNode,
        constructor:{defaultPresent$get,
            instance$get:node$get
        },
        me:pNode
    },
    {self:{filteredNodes$getObj,onlyFilteredNode$getObj,
        nodeSpecs$getObj:{nodeSpec$getObj}
    }}
)=>()=>{
    if(isPresentNode)return {}
    const nodeSpecs=nodeSpecs$getObj();
    return {
        present:onlyFilteredNode$get({nodeSpecs,
            filter:({nameHandle:{isPresent}})=>isPresent,
            onError$str:'multiple presents'
        }) || node$get({pNode,
            nodeSpec:nodeSpec$getObj({
                fullName:'present$present',
                nodeSpec:{
                    homelessModules:defaultPresent$get
                }
            })
        }),
        future:onlyFilteredNode$get({nodeSpecs,
            filter:({nameHandle:{nodeFlavor}})=>(nodeFlavor==='future'),
            onError$str:'multiple futures'
        }),
        ...filteredNodes$getObj({
            nodeSpecs,
            filter: ({node})=>(!node)
        })
    }
}
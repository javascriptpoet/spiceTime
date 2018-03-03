export default ({
    external:{_},
    util:{extendMe}
})=>(
    {path,
        nodeSpec:{
            housedModuleNames:[],
            homelessModules:{}
        },
        constructor:{
            nameHandle$class,nodeSpec$castFrom,housedNodeSpec$get
        }
    },
    {self:{nodeSpec$getObj}}
)=>{
    const nodeSpecs$update=({nodeSpecs,fullName,nodeSpec})=>{
        const {firstName,me:nodeSpec}=nodeSpec$getObj({fullName,nodeSpec})
        return {...nodeSpecs,
            [firstName]:nodeSpec
        }
    }
    return {
        ...housedModuleNames.reduce(
            (nodeSpecs,fullName)=>nodeSpecs$update({nodeSpecs,fullName,
                nodeSpec:nodeSpec$castFrom({
                    housedNodeSpec:housedNodeSpec$get({
                        path:path+'/'+fullName
                    })
                })
            }),
            {}
        ),
        ..._.reduce(
            homelessModules,
            (nodeSpecs,homelessNodeSpec,fullName)=>nodeSpecs$update({nodeSpecs,fullName,
                nodeSpec:nodeSpec$castFrom({homelessNodeSpec})
            }),
            {}
        )
    }

}

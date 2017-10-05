export default ({
    external:{t},
    util:{typeofSwitch},
})=>({node:{appTopRequire,isBaseNode,
    nameHandle:pNodeHandle
}})=>({
    path:childPath,
    nameHandle:childNameHandle=pNodeHandle
})=>{
    const {
        nodeType:childNodeType
    }=childNameHandle;
    const assertBaseness=(guard)=>t.assert(
        !isBaseNode || guard,
        `module ${childPath} must be unstructured`
    );
    const homelessModules$get=()=>{
        let homelessModules={};
        try{
            homelessModules=appTopRequire(childPath)
        }catch(e){
            t.assert(false,`module ${childPath} missing`);
        };
        const housedModuleNames$get=()=>{
            const [childFullName,...pPath$rra]=childPath.split('/').invert();
            const housedModuleNamesPath=[...pPath$rra.invert(),'housedModuleNames'].join('./');
            let housedModuleNames=[];
            try{
                housedModuleNames=appTopRequire(housedModuleNamesPath)
            }catch(e){};
            assertBaseness(!housedModuleNames.length);
            return housedModuleNames
        };
        homelessModules=typeofSwitch({
            function:(present)=>(
                isBaseNode?present:{
                    'present#present':present
                }
            ),
            object:({homelessModules})=>homelessModules
        })(homelessModules);
        assertBaseness(typeof homelessModules==='function')
    };
    return isBaseNode?homelessModules$get():{
        homelessModules:homelessModules$get(),
        housedModuleNames:housedModuleNames$get()
    }
}


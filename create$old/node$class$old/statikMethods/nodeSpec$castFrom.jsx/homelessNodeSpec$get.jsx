export default ({
    external:{_,t},
    util:{typeofSwitch}
})=>()=>({
    nameHandle:{me:nameHandle,isPresentNode},
    ...nodeSpec
})=>({nameHandle,
    ...typeofSwitch({
        function:(present$present)=>({
            housedModuleNames:[],
            homelessModules:isPresent?present$present:{present$present}
        }),
        object:(homelessModules)=>{
            t.assert(!isPresentNode,'present must be unstructured func')
            t.assert(
                !_.has(homelessModules,'housedModuleNames'),
                `homeless module must be unstructured`
            );
            return {homelessModules,
                housedModuleNames:[]
            }
        }
    })(nodeSpec)
})
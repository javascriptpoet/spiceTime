export default ({
    external:{_,t},
    util:{typeofSwitch}
})=>(
    {},{parent:{homelessNodeSpec$get}}
)=>({
    nameHandle,housedModuleNames,homelessModules
})=>({nameHandle,
    housedModuleNames:t.dict(t.String,t.String)(housedModuleNames),
    homelessModules:homelessNodeSpec$get(homelessModules)
})

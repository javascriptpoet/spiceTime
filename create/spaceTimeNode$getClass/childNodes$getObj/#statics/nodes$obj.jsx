export default ({
    external:{_}
})=>({node$get,node:{nodeSpec:{
    housedModuleNames:[],
    homelessModules:{}
}}})=>({
    ...housedModuleNames.reduce(
        (nodes,fullName)=>addNode$getObj({nodes,fullName}),
        {}
    ),
    ..._.reduce(
        homelessModules,
        (nodes,homelessNodeSpec,fullName)=>{
            const {nameHandle:{firstName},me:node}=node$get({fullName,homelessNodeSpec});
            return {...nodes,
                [firstName]:node
            }
        },
        {}
    )
})
export default ()=>()=>({
    appTopRequire
})=>({
    path
})=>{
    let housedModuleNames=[];
    try{
        housedModuleNames=appTopRequire(path+'/housedModuleNames$arr')
    }catch(e){};
    let homelessModules={};
    try{
        homelessModules=appTopRequire(path)
    }catch(e){
        homelessModules={}
    };
    return {housedModuleNames,homelessModules}
}


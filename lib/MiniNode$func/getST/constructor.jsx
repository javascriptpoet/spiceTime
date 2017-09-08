export default ({appTopRequire,
    external:{t,_},
    util:{extendMe}
})=>(sT)=>({node:{
    path,getNode,homelessST,NameHandle,
    nameHandle:{
        firstName:myFirstName,
        name:myFullName
    },
    constructor:{tt,n}
}})=>{
    if(homelessST)return homelessST;
    const housedModuleNames=t.list(t.String)(appTopRequire(path));
    const homelessModules=(()=>{
        if(housedModuleNames.find((name)=>(name==='builder')))
            return t.dict(t.String,tt.sT)(appTopRequire(`${path}/builder`));
        return {}
    })();
    const cleanBoxST=({back,future,builder,...cleanedST})=>cleanedST;
    const processModuleName=({fullName,homelessST,accumulated})=>{
        const {firstName,
            me:nameHandle
        }=NameHandle(fullName);
        if(firstName)return {...accumulated,
            [firstName]:nameHandle
        };
        const boxST=getNode({homelessST,fullName,
            pNode:node
        });
        const cleanBoxST=({back,future,builder,...cleanedST})=>cleanedST;
        return {...accumulated,...cleanBoxST(boxST)}
    };
    Object.assign(sT,{
        ...housedModuleNames.reduce(
            (accumulated,fullName)=>processModuleName({fullName,accumulated}),
            {}
        ),
        ..._.reduce(
            homelessModules,
            (accumulated,homelessST,fullName)=>processModuleName({fullName,accumulated,homelessST}),
            {}
        )
    })

}
export default ()=>({
    node:{
        path:pPath,
        constructor:{nameHandle$class,
            instance$get:node$get
        }
    },
    housedNodeSpec$getObj
})=>({
    fullName,homelessNodeSpec
})=>{
    const {firstName,
        me:nameHandle
    }=new nameHandle$class({fullName});
    const path=pPath+'/'+fullName;
    const nodeSpec=homelessNodeSpec || housedNodeSpec$getObj({nameHandle,path});
    return node$get({nameHandle,nodeSpec,path,pNode})
}
export default ()=>({nodeType,nodeTypesFunc,
    nameHandle:{firstName}
})=>()=>{
    if(nodeTypesFunc('all').includes(nodeType) && !firstName)return nodeType;
    return firstName
}
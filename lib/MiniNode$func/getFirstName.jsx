export default ()=>({nodeType,
    nameHandle:{firstName},
    getProcess:{attrNames}
})=>()=>{
    if(attrNames.contains(nodeType) && !firstName)return nodeType;
    return firstName
}
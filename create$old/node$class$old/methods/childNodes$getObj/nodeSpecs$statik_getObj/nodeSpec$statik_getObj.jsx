export default ({
    util:{extendMe}
})=>({constructor:{
        nameHandle$class
}})=>({
    fullName,nodeSpec
})=>extendMe({...nodeSpec,
    nameHandle:new nameHandle$class(fullName)
})

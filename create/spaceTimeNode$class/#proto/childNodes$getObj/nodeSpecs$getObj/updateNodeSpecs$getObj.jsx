export default ({
    util:{extendMe}
})=>({constructor:{
        nameHandle$class
}})=>({fullName, nodeSpecs, nodeSpec,
    nameHandle=new nameHandle$class(fullName)
})=> {
    const {firstName, me:nameHandle}=nameHandle;
    return {
        ...nodeSpecs,
        [firstName]: extendMe({nameHandle, ...nodeSpec})
    }
}

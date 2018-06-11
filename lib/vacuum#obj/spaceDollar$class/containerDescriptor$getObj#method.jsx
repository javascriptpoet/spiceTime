export default ()=>({vacuum,self$get,
    container:space
})=>()=>{
    const self=self$get(vacuum)(space)
    return {
        get:()=>self
    }
}

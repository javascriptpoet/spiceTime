export default ()=>({
    container:vacuum,
    $:{self$get}
})=>()=>{
    const self$inSpace=self$get(vacuum)
    return {
        get:()=>self$inSpace({})
    }
}
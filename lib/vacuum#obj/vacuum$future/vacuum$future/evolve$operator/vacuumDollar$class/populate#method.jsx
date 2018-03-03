export default ({
    externals:{_}
})=>({container,$})=>(wrappedLocals)=>Object.defineProperties(container,_.mapObject(wrappedLocals,(self$get,name)=>{
    const {$:child$}=$.evolve()
    child$.assign({self$get,name})
    return child$.containerDescriptor$getObj()
}))

export default ()=>function(wrappedLocals$union){
    const {container,
        constructor:{containerDescriptor$getObj}
    }=this
    return Object.defineProperties(
        this.container,
        _.mapObject(
            this.args$cast(wrappedLocals$union),
            (self$wrapped,name)=>containerDescriptor$getObj({container,self$wrapped,name})
        )
    )
}
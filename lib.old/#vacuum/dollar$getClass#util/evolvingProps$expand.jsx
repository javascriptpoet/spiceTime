export default ({
    externals:{_}
})=>function(props$union){
    const {arg$cast,evolvingPropNames,expand,
        constructor:{monetize}
    }=this
    return _.each(
        arg$cast(children$union),
        (child,name)=>{
            evolvingPropNames.push(name)
            expand({
                [name]:monetize({container:child})
            })
        }
    )
}
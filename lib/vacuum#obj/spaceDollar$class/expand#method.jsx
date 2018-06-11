export default ({
    utils:{typeofSwitch,extendMe}
})=>({container})=>{
    const arg$cast=(expander$union)=>extendMe(
        typeofSwitch({
            object:(expander$obj)=>expander$obj,
            function:(expander$getObj)=>expander$getObj(container)
        })(expander$union)
    )
    return extendMe(
        Object.assign(
            (expander$union)=>Object.assign(container,arg$cast(expander$union)),
            {argr$cast}
        )
    )
}
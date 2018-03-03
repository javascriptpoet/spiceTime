export default ({
    utils:{typeofSwitch}
})=>function(expander$union){return typeofSwitch({
    object:(expander$obj)=>expander$obj,
    function:(expander$getObj)=>expander$getObj(this.container)
})(expander$union)}
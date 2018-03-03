export default ({
    utils:{cast},
    externals:{_,t}
})=>({scope})=>(props={})=>cast({
    object:(props)=>props,
    function:(props$get)=>props$get(scope)
})(props)



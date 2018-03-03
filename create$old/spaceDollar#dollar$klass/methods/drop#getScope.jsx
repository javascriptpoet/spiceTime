export default ({
    externals:{_}
})=>({dolar$getObj})=>(scope)=>Object.defineProperty(scope,'$',{
    value:dolar$getObj(scope),
    enumerable:false
})

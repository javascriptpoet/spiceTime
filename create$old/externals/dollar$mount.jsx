export default ()=>(target,dollar$obj)=>Object.defineProperty(target,'$',{
    value:dollar$obj,
    enumerable:false,
    configurable:true
})
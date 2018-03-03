export default ({
    externals:{_}
})=>(...mes)=>_.each(mes,(me)=>Object.defineProperty(me,'me',{
    writable:false,
    enumerable:false,
    value:me
}))

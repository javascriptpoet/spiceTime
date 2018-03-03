import typeofSwitch from './typeofSwitch#prop'
import extendMe from './extendMe#prop'

export default ({
    me:vacuum,
    externals:{_}
})=>(wrapped)=>{
    const typeofSwitch=typeofSwitch(vacuum)
    const unwrap=(wrappedFunc)=>wrappedFunc(wrapperProps)
    const unwrapped=typeofSwitch({
        function:unwrap,
        object:(wrappedFuncs)=>_.mapObject(wrappedFuncs,unwrap)
    })(wrapped)
    const extendMe=()=>extendMe(unwrapped)
    return typeofSwitch({
        object:extendMe(),
        function:extendMe(),
        array:extendMe(),
        other:()=>unwrapped
    })(unwrapped)
}
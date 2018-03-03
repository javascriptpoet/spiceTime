import externals from './externals'
import typeofSwitch from './typeofSwitch'
import extendMe from './extendMe'

export default ({wrapperProps})=>(wrapped)=>{
    const {typeofSwitch,_}=externals
    extendMe(wrapperProps)
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
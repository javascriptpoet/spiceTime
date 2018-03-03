import typeofSwitch from './typeofSwitch'

export default (funcProps)=>(val)=>{
    const commonSwitch=(funcProps)=>(val)=>typeofSwitch({
        object:(obj)=>obj,
        function:(func)=>func(funcProps)
    })(val)
    return commonSwitch(
        commonSwitch(funcProps)
    )(val)
}
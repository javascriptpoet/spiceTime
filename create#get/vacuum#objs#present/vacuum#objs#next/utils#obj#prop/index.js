import utils from './#props'
import unwrap from './unwrap#prop'
import extendMe from './extendMe#prop'
import typeofSwitch from './typeofSwitch#prop'

export default (vacuum)=>{
    extendMe(vacuum.externals)
    const utils=extendMe({
        unwrap:unwrap(vacuum)
    })
    return Object.assign(utils,{extendMe,unwrap,
        typeofSwitch:unwrap(typeofSwitch)
    })
}
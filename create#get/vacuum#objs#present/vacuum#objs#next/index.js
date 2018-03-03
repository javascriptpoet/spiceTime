import utils from './utils#obj#prop'
import vacuum from './vacuum#objs#next'

export default (vacuum)=>{
    const {extendMe,me:utils}=utils(vacuum)
    return extendMe({utils,
        externals:extendMe(vacuum.externals)
    })
}
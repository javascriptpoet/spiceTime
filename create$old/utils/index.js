import utils from './utils'
import unwrap from './unwrap'

export default ({externals})=>Object.assign(utils,{
    unwrap:unwrap({externals,utils})
})

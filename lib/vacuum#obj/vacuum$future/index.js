import utils from './#utils'
import vacuum$future from './vacuum$future'

export default ({unvacuum})=>unvacuum([utils,vacuum$future]).pop()

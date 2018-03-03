import externals from './externals'
import extendMe from './extendMe'
import typeofSwitch from './typeofSwitch'
import unwrap from './unwrap'
import unwrap$getFunc from './unwrap$getFunc'
import cast from './cast'

extendMe(externals)
export default Object.assign(externals,{
    extendMe,typeofSwitch,unwrap,unwrap$getFunc,cast
})
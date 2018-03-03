import externals from './#externals'
import extendMe from './extendMe#util'
import unvacuum from './unvacuum#vacuumProp'
import vacuum$future from './vacuum$future'
import typeofSwitch from './typeofSwitch#util'
import dollar$getClass from './dollar$getClass#util'
import base$class from './base$class#util'

const vacuum={externals,
    utils:{extendMe}
}
extendMe(vacuum,vacuum.utils,externals)
typeofSwitch(vacuum)
unvacuum(vacuum)
base$class(vacuum)
dollar$getClass(vacuum)
export default vacuum$future(vacuum)


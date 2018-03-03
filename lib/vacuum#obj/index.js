import externals from './externals#prop'
import extendMe from './extendMe#util'
import unvacuum from './unvacuum#vacuum'
import unvacuum$getFunc from './unvacuum$getFunc#util'
import typeofSwitch from './typeofSwitch#util'
import vacuum$future from './vacuum$future'

const vacuum={externals,
    utils:{extendMe},
    operators:{}
}
extendMe(vacuum,...vacuum)
export default [typeofSwitch,unvacuum$getFunc,unvacuum,vacuum$future].map(
    (funcInVacuum)=>funcInVacuum(vacuum)
).pop()

import Node$present from './Node$present'
import methods from './methods#funcs'
import constructor from './constructor'

export default ({externals,
    me:pVacuum,
    utils:{unvacuum$getFunc,extendMe,me:utils}
})=>{
    const {flavors}=Object.assign(pVacuum,{
        flavors:extendMe({})}
    )
    const evolve$flavor=unvacuum(evolve$flavor)
    const {vacuum,me:evolveSpace$flavor}=evolve$flavor(pVacuum)
    vacuum.$.expand$evolvingProps({externals,utils,flavors})
    return evolveSpace$flavor(
        unvacuum$getFunc(vacuum)({methods,constructor,Node$present})
    ).Node$present
}


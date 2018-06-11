import flavor from './flavor'

export default ({
    me:pastVacuum,
    utils:{obj$get,unwrap$get}
})=>(pastSpace)=>obj$get({
    hostSpace:pastSpace.$.evolve(),
    propsInSpace:unwrap$get(
        pastVacuum.$.evolve()
    )({
        flavor
    }),
    instanceName:'flavors'
})
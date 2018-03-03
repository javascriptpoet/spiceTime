export default ({
    me:vacuum,
    utils:{me:utils,unvacuum$getFunc}
})=>Object.assign(vacuum,{
    unvacuum:unvacuum$getFunc(vacuum)
}).unvacuum

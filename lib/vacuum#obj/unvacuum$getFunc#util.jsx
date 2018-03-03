export default ({
    me:vacuum,
    externals:{_},
    utils:{typeofSwitch,extendMe,me:utils}
})=>Object.assign(utils,{
    unvacuum$getFunc:(vacuum)=>(locals$union)=>{
        const unvacuum=(funcInVacuum)=>funcInVacuum(vacuum)
        return extendMe(
            typeofSwitch({
                function:unvacuum,
                object:(funcsInVacuum)=>_.mapObject(funcsInVacuum,unvacuum),
                array:(funcsInVacuum$arr)=>funcsInVacuum$arr.map(unvacuum)
            })(locals$union)
        )
    }
}).unvacuum$getFunc


export default ({
    me:vacuum,
    externals:{_},
    utils:{typeofSwitch,extendMe}
})=>{
    vacuum.unvacuum=(locals$union)=>extendMe(
        typeofSwitch({
            function:(funcInVacuum)=>funcInVacuum(vacuum),
            object:(funcsInVacuum)=>_.mapObject(funcsInVacuum,(funcInVacuum)=>funcInVacuum(vacuum))
        })(locals$union)
    )
}

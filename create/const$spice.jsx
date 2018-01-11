export default ({externals:{_}})=>()=>({hostWrappedSpace,
    hostSpaceTime:{
        time:{tic},
        $:{populate}
    }
})=>{
    populate(hostWrappedSpace)
    return _.once(tic)()
}

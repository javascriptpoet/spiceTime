export default ({
    me:defineProps,
    utils:{extendMe,typeofSwitch},
    externals:{_,t}
})=>({space$flavor})=>({childWrappedSpace,
    childSpaceTime:{
        me:hostSpaceTime,
        $:{flavorName,name}
    }
})=>{
    const {
        me:hostWrappedSpace,
        present:wrappedPresent
    }=extendMe(
        typeofSwitch({
            object:(wrappedSpace)=>wrappedSpace,
            function:(present)=>({present})
        })(childWrappedSpace)
    )
    return {
        get:()=>{
            const flavor=spaceTime[flavorName]
            return flavor({hostSpaceTime,hostWrappedSpace})
        },
        set:(value)=>t.assert(false,`${name} of ${flavorName} flavor can not be set to ${value} in scope ${spaceTime}`)
    }
}




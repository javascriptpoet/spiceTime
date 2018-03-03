export default ({
    me:defineProps,
    externals:{_}
})=>({const$spice})=>({
    hostSpaceTime:{
        me:hostSpaceTime,
        self$spice:host$spice=const$spice
    },
    hostWrappedSpace:{present:hostPresent,...hostWrappedSpace}
})=>{
    const {noun:noun$spice,verb:verb$spice}=typeofSwitch({
        function:(noun)=>({noun}),
        object:({noun,verb})=>({noun,verb})
    })(host$spice)
    const hostSpaceTime$verb=hostSpaceTime.$.evolutions$set(['verb','statik']).$.expand({time:{
        tic:(hostSpaceTime$verb=hostSpaceTime)=>{
            const hostSpaceTime$noun=(
                verb$spice?hostSpaceTime$verb.$.evolve():hostSpaceTime$verb
            ).$.evolutions$set(['noun','space'])
            hostSpaceTime$noun.$.expand({time:{
                tic:(hostSpaceTime$noun=hostSpaceTime$noun)=>_.once(hostPresent)(defineProps)(hostSpaceTime$noun)
            }})
            return noun$spice({
                hostWrappedSpace,
                hostSpaceTime:hostSpaceTime$noun
            })
        }}
    })
    const verb=verb$spice || (({hostSpaceTime:{time:{tic}}})=>tic())
    return verb({hostWrappedSpace,
        hostSpaceTime:hostSpaceTime$verb
    })
}
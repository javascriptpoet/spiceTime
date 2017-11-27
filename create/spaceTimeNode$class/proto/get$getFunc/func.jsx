export default ({
    util:{extendMe}
})=>(
    {set,isPresentNode,
        spice:{verb}
    },
    {self:{spaceTime$getObj:{
        localTime$get:{present$get},
        me:spaceTime$getObj
    }}}
)=>(pSpaceTime)=>()=>{
    const spaceTime=isPresentNode?pSpaceTime:spaceTime$getObj({
        spaceTime:extendMe(Object.create(pSpaceTime))
    });
    const val=verb({spaceTime,
        get:(spaceTime)=>{
            present$get({spaceTime});
            return spaceTime.future$get({spaceTime})
        }
    })
}


export default ()=>(
    {spice:{verb}},
    {self:{spaceTime$getObj:{localSpace$get,
        localTime$get:{present$get,future$get},
        me:spaceTime$getObj
    }}}
)=>({pSpaceTime})=>()=>{
    const spaceTime=spaceTime$getObj({pSpaceTime});
    return verb({spaceTime,
        get:(spaceTime)=>{
            localSpace$get({spaceTime});
            present$get({spaceTime});
            return future$get({spaceTime})
        }
    })
}


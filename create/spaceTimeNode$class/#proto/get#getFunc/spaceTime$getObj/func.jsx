export default ({
    util:{extendMe}
})=> (
    {self:{localTime$get}}
)=>({pSpaceTime:{
    time:pTime={},
    me:pSpaceTime
}})=>{
    const spaceTime=extendMe(Object.create(pSpaceTime));
    return Object.assign(spaceTime,{
        time:localTime$get({pTime})
    })
}



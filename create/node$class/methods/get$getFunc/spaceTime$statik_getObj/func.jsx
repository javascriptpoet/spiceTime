export default ()=> (
    {self:{localTime$get,localSpace$getAssigned}}
)=>({pSpaceTime:{
    time:pTime={},
    me:pSpaceTime
}})=>{
    Object.assign(spaceTime,{
        time:localTime$get({pTime})
    })
    localSpace$getAssigned({spaceTime})
}



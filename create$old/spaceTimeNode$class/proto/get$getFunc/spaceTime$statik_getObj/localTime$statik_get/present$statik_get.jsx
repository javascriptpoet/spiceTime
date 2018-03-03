export  default ()=>({
    present$get
})=>({
    spaceTime:{time,
        me:spaceTime
    }
})=>{
    const present=present$get(spaceTime);
    if(present)time.present=present
}
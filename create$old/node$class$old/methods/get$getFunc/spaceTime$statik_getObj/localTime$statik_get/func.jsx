export  default ({
    util:{extendMe}
})=>(
    {childNodes:{present:{nodeSpec:{nameHandle:{
        firstName:presentFirstName
    }}}}},
    {self:{past$getArr,future$get}}
)=>({pTime})=>{
    let present;
    const presentSpec={
        get:()=>present,
        set:(val)=>{present=val}
    }
    const time=extendMe(Object.defineProperties({},{
        present:presentSpec,
        [presentFirstName]:presentSpec
    }))
    Object.assign(time,{future$get,
        past:past$getArr({pTime}),
    })
}

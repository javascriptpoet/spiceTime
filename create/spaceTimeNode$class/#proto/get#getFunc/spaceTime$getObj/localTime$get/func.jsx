export  default ({
    util:{extendMe}
})=>(
    {childNodes:{present:{nodeSpec:{nameHandle:{
        firstName:presentFirstName
    }}}}},
    {self:{past$getArr}}
)=>({pTime})=>{
    let present;
    const presentSpec={
        get:()=>present,
        set:(val)=>{present=val}
    };
    return extendMe(Object.defineProperties({},{
        past:{value:past$getArr({pTime})},
        present:presentSpec,
        [presentFirstName]:presentSpec
    }))
}

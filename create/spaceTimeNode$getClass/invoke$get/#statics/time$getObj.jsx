export default ({
    external:{_}
})=>({runtimeProps,
    pRuntimeProps:{time:{
        past:pPast$arr,
        present:pPresent,
        me:pTime
    }},
    node:{present$get,isRuntimeNode,buildtimeProps,
        childNodes:{
            present:{
                me:presentNode,
                nameHandle:{
                    firstName:presentName
                }
            }
        }
    }
})=>()=>{
    let present;
    const presentSpec={
        get:()=>present,
        set:(val)=>{present=val}
    };
    Object.assign(runtimeProps,{
        time:Object.create(pTime,{
            past:{
                writable:false,
                value:pPast$arr.concat([pPresent])
            },
            present:presentSpec,
            [presentName]:presentSpec
        })
    });
    const presentNodeRes=isRuntimeNode?present$get(runtimeProps):present$get(buildtimeProps)(runtimeProps);
    if(presentNodeRes)present=presentNodeRes
}
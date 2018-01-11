export  default ({
    util:{structuredMethod$get:{extend}}
})=>extend({statik:{
        spaceTime$getObj:extend({statik:{
            localSpace$getAssigned:extend({
                func:(
                    {dollar$getObj_funcs:{runtime$getDollar}},
                    {self:{supr}}
                )=>(spaceTime)=>{
                    supr(spaceTime)
                    Object.assign(spaceTime,{
                        $:runtime$getDollar(spaceTime)
                    })
                }}
            )}
        })
    }
})

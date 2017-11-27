export  default ({
    external:{_}
})=>({
    extendMe
})=>extendMe(
    ({func,
        me:spaceTime
    })=>({},{self$get})=>self$get({func,
        statik:_.reduce(
            spaceTime,
            (statik,method,fullName)=>{
                const statikName=fullName.replace('statik_','')
                return statikName===fullName?statik:{...statik,
                    [statikName]:method
                }
            }
        )
    }),
    {
        extend:({statik,func})=>()=>({},{self$get:{extend}})=>extend({statik,func})
    }
)

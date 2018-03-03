export  default ()=>()=>({
    verb:({spaceTime,get})=>(...args)=>get(spaceTime)(args)
})
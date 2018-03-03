export default ()=>({assign,locals$getObj,
    constructor:{prototype}
})=>assign(prototype).mount({
    locals:{get:()=>locals$getObj()}
})

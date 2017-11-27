export  default ()=>({
    nodeSpec:{nameHandle:{spiceName}},
    constructor:{baseSpice$obj:{get,val}}
})=>()=>{
    spiceName.startsWith('get')?get:val
}
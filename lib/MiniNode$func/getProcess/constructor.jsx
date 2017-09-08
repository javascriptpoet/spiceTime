export default ()=>({
    $me:process,
})=>({node})=>Object.assign(process,{
    spaceNode:node,
    timeline:[],
    scopes:{
        time:{},
        space:{}
    }
})
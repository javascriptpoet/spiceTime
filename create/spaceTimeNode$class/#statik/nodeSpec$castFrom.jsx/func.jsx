export default  ()=>(
    {self:{homelessNodeSpec$get,housedNodeSpec$get}}
)=>({
    homelessNodeSpec,housedNodeSpec
})=> {
    if(homelessNodeSpec)return homelessNodeSpec$get(homelessNodeSpec);
    if(housedNodeSpec)return housedNodeSpec$get(housedNodeSpec)
}
export default ()=>(
    {nodeSpec:{nameHandle:{nodeFlavor}}},
    {self:{mountNodes}}
)=>({spaceTime})=>{
    mountNodes({spaceTime});
    if(nodeFlavor==='space')mountNodes({spaceTime,
        nodes:{self:node}
    });
}
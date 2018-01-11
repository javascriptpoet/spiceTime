export default ()=>(
    {nodeSpec:{nameHandle:{nodeFlavor,firstName}}},
    {self:{mountNodes}}
)=>({spaceTime})=>{
    mountNodes({spaceTime});
    if(nodeFlavor==='space')mountNodes({spaceTime,
        nodes:{self:node}
    });
}
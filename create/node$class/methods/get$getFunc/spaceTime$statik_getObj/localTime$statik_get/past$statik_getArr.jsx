export  default ()=>(
    {nodeSpec:{nameHandle:{nodeFlavor}}},
    {self:{past$getArr}}
)=>({pTime:{
    past:pPast=[],
    present:pPresent,
    ...pNamedPresent$obj
}})=>(
    (nodeFlavor==='space')?[]:Object.assign(
        pPast.push(pPresent),pNamedPresent$obj
    )
)

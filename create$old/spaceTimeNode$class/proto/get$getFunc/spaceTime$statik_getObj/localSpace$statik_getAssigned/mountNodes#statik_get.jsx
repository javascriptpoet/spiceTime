export  default  ()=>({mountNodes,
    childNodes$get:{filteredNodes}
})=>({spaceTime,
    nodes=filteredNodes(({nameHandle:{nodeFlavor}})=>(nodeFlavor==='space'))
})=>mountNodes({nodes,
    scope:spaceTime,
    get:({childNode:{get$getFunc}})=>get$getFunc(spaceTime)
})

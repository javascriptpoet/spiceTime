export  default  ()=>({
    mountNodes,childNodes
})=>({spaceTime,
    nodes=childNodes['space']
})=>mountNodes({nodes,
    scope:spaceTime,
    get:({get})=>get({pSpaceTime:spaceTime})
})

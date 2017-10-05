export  default ({external:{_}})=>({nodes})=>({flavor})=>_.find(
    nodes,
    ({nameHandle:{nodeFlavor,
        me:node
    }})=>(flavor===nodeFlavor)
)
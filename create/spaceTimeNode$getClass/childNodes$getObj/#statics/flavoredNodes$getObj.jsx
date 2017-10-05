export default ({external:{_}})=>({nodes})=>({flavor})=>_.reduce(
    nodes,
    (flavoredNodes,{nameHandle:{nodeFlavor,firstName,
        me:node
    }})=>((flavor===nodeFlavor)?{...flavoredNodes,
        [firstName]:node
    }:nodes),
    {}
)

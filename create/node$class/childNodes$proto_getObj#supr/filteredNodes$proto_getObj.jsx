export  default  ()=>()=>({},{
    self:{supr:filteredNodes$getObj}
})=>(filter,nodeSpecs)=>{
    const nodes={};
    return Object.assign(nodes,filteredNodes$getObj({nodeSpecs,
        filter:({node,me:nodeSpec})=>{
            if(filter(nodeSpec)){
                if(node){
                    nodes[node.firstName]=node;
                    return false
                };
                return true
            }
        }
    }))
}
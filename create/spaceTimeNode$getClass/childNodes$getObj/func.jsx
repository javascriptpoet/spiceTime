export default ()=>({assign,
    node$get,nodes$getObj,flavoredNodes$getObj,firstFlavoredNode$get,
    node:{defaultPresent$get}
})=>()=>{
    assign({nodes:nodes$getObj()});
    return {present,
        space:flavoredNodes$getObj({flavor:'space'}),
        future:firstFlavoredNode$get({flavor:'future'}),
        present:firstFlavoredNode$get({flavor:'present'}) || node$get({
            fullName:'present#present',
            homelessNodeSpec:defaultPresent$get
        })
    }
}
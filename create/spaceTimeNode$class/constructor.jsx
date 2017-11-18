export default ({
    external:{t}
})=>({
    assign,bildtimeProps$getObj,childNodes$getObj,spice$getObj,
    constructor:{defaultPresent$get}
})=>({nodeSpec,
    path='./',
    pNode={}
})=>{
    const {
        nodeSpec:{housedModuleNames,homelessModules,
            nameHandle:{isPresent}
        }
    }=assign({pNode,path,nodeSpec});
    const {buildtimeProps}=assign({buildtimeProps:buildtimeProps$getObj()});
    assign({spice:spice$getObj()});
    if(isPresent){
        assign({present$get:homelessModules(buildtimeProps)})
    }else{
        const {childNodes:{present:presentNode}}=assign(({childNodes:childNodes$getObj()}));
        assign({
            present$get:presentNode?presentNode.present$get:defaultPresent$get
        })
    }
}
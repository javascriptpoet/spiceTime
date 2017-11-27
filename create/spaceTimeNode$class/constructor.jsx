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
            nameHandle:{isPresentNode}
        }
    }=assign({pNode,path,nodeSpec})
    const {buildtimeProps,
        childNodes:{present:presentNode}
    }=assign({
        buildtimeProps:buildtimeProps$getObj(),
        childNodes:childNodes$getObj()
    })
    assign({spice:spice$getObj()})
    assign({
        present$get:isPresentNode?
            presentNode.get:
            (spaceTime)=>{
                const {present$get}=assign({present$get:homelessModules(buildtimeProps)})
                return present$get(spaceTime)
            }
    })
}
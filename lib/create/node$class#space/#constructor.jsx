export default ({
    externals:{_},
    utils:{base$class}
})=>({nameHandle$class,methods})=>{
    const node$class=class extends base$class{
        constructor({nodeSpec,nameHandle,fullName,
            pastNode:{
                me:pastNode,
                path:pastPath,
                require:pastRequire
            }
        }){
            super()
            const {
                nameHandle:{flavor:flavorName},
                vacuum:{$:{localInfos:{$:{presentInfo,futureInfo}}}}
            }=this.assign({pastNode,nodeSpec,
                nameHandle:nameHandle || (new nameHandle$class(fullName)),
                path:pastPath+fullName+'/',
                require:(path)=>pastRequire(fullName+'/')
            }).assign({
                nodeSpec:this.nodeSpec$get()
            }).assign({
                vacuum:this.evolveVacuum()
            })
            const {
                vacuum:{$:{localInfos:{$:{presentInfo}}}}
            }=this.assign({
                spaceFlavor:(flavors[flavorName] || ()=>()=>{})(vacuum)
            })
            presentInfo.localInSpace=presentInfo.localInVacuum()
            futureInfo.localInSpace=futureInfo.localInVacuum()
        }
    }
    Object.assign(node$class.prototype,methods)
    return node$class
}

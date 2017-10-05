export default ({
    external:{_}
})=>({$me:self,isNodeStatik})=>({
    nodes,pScope
})=>{
    const getScope=({isScopeStatik})=>Object.create(pScope,_.mapObject(
        {...nodes,self},
        ({get,set,nodes:{statikNode}})=>{
            isScopeStatik?{get,set}:{
                get:statikNode.get,
                set:statikNode.set
            }
        }
    ));
    return isNodeStatik?getScope({}):Object.assign(getScope({}),{
        statik:getScope({isScopeStatik:true})
    })
}

import 'getNodes';
import 'getAttrNodes';
import 'getInfos';

export default ({
    util:{getStructuredClass},
    $me:wrapperProps
})=>(node)=>()=>{
    const constructor=()=>({$me:self,runtimeNodes,getInfos,getNodes,getAttrNodes})=>()=>{
        self.infos=getInfos();
        Object.assign(self,{
            spaceNodes:getNodes({type:'space'}),
            attrNodes:getAttrNodes()
        })
    };
    const {attrNodes,spaceNodes}=new getStructuredClass({wrapperProps,constructor,
        methods:{protos:{
            getNodes,getInfos,getAttrNodes
        }}
    })({node});
    return {attrNodes,spaceNodes}
}
import invoke from 'invoke';
import getResult from 'getResult';

export default ({
    util:{getStructuredClass},
    $me:wrapperProps
})=>(node)=>({invokationProps,pRuntimeProps})=>{
    const {result}=new getStructuredClass({wrapperProps,
        constructor:()=>({$me:self,getResult})=>()=>{
            self.result=getResult()
        },
        methods:{protos:{
            invoke,getResult
        }}
    })({node,invokationProps,pRuntimeProps});
    return result
}
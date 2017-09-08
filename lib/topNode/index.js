import constructor from './constructor';
import MiniNodeFunc from './MiniNodeFunc';
import 'topNodeFunc';

export default ({
    util:{getStructuredClass},
    me:wrapperProps
})=>({appTopRequire})=>{
    const {MiniNodeFunc}=new getStructuredClass({wrapperProps,methods:{protos:{
        topMiniNodeFunc,
    }}});
    const MiniNode=MiniNodeFunc({
        appTopRequire:(path)=require('./topNodeFunc'+path)
    });
    const topMiniNode=new MiniNode({
        fullName:'topNodeFunc',
        pNode:{
            buildtimeProps:wrapperProps
        }
    });
    return topMiniNode.invoke({
        invokationProps:{appTopRequire,MiniNode}
    })
}
import tic from './tic';
import constructor from './constructor';
import attrNames from './attrNames';

export default ({
    util:{getStructuredClass},
    me:wrapperProps
})=>(node)=>Object.assign(
    ()=>{
        new getStructuredClass({constructor,wrapperProps,
            methods:{
                protos:{tic}
            }
        })({node})
    },
    {attrNames}
)

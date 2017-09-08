import constructor from './constructor';
import invoke from './invoke';
import getModuleHandler from './getModuleHandler';
import getScopes from './getScopes';
import getPath from './getPath';
import getNodes from './getNodes';
import n from './n$static';
import tt from './tt$static';

export default ({
    util:{getStructuredClass},
    me:wrapperProps
})=>(props)=>{
    new getStructuredClass({constructor,wrapperProps,
        methods:{
            protos:{
                invoke,getModuleHandler,getScopes,getPath,getNodes
            },
            statics:{
                n,tt
            }
        }
    })(props)
}
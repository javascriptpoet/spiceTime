import constructor from './constructor';
import invoke from './invoke';
import getModuleHandler from './getModuleHandler';
import getScopes from './getScopes';
import getNodes from './getNodes';
import nodeTypesFunc from './nodeTypesFunc$stat'

export default ({
    util:{getStructuredClass},
    me:wrapperProps
})=>({appTopRequire})=>getStructuredClass({wrapperProps,
    constructor:(wrapperProps)=>(self)=>constructor(wrapperProps)(Object.assign(self,{
        appTopRequire:(path)=>appTopRequire(`./${path || 'index'}`)
    })),
    methods:{
        protos:{invoke,getModuleHandler,getScopes,getPath,getNode},
        statics:{nodeTypesFunc}
    }
})
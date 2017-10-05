import baseFunc from './baseFunc$stat';
import structuredFunc from './structuredFunc$stat';

export default ({
    util:{getStructuredClass},
    me:wrapperProps
})=>(node)=>{
    const nodeTypesFunc=(statics)=>{
        const {val}=new getStructuredClass({wrapperProps,
            constructor:()=>({assign,constructor})=>{
                const nodeTypeFuncs=_.pick(constructor,_.keys(constructor));
                const allFunc=()=>_.reduce(
                    nodeTypeFuncs,
                    (nodeTypes,nodeTypeFunc)=>[...nodeTypes,...nodeTypeFunc()],
                    []
                );
                assign({
                    val:Object.assign(allFunc,nodeTypeFuncs)
                })
            },
            methods:{statics}
        })({nodeTypesFunc,node});
        return val
    };
    return nodeTypesFunc({baseFunc,structuredFunc})
}
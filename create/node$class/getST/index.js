
export default ({
    util:{getStructuredClass},
    me:wrapperProps
})=>(node)=>(props)=>{
    new getStructuredClass({constructor,wrapperProps,
        methods:{protos:{

        }}
    })({...props,node})
}
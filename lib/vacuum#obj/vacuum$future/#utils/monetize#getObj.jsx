export default ({
    externals:{t},
    utils:{extendMe},
})=>t.func(
    t.struct({
        container:t.Object,
        $:t.Object
    },{defaultProps:{
        container:{},
        $:{}
    }}),
    t.Object
).of(
    ({container,$})=>Object.defineProperty(extendMe(container),'$',{
        value:extendMe({...$,container}),
        enumerable:false,
        configurable:false
    })

)
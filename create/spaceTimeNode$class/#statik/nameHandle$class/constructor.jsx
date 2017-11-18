export  default ({
    util:{extendMe}
})=>({
    assign,tokens,attrs$getDarr,firstName
})=>()=>{
    assign({
        shortName:firstName.split('$')[0],
        tokens:tokens.map((token$str)=>token$str.split('_'))
    });
    const {attrs:{
        spice:[spiceName],
        nodeFlavor:{name:nodeFlavor}
    }}=assign({
        attrs:attrs$getDarr()
    });
    assign({spiceName,nodeFlavor})
}
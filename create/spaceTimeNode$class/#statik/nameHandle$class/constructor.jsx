export  default ({
    util:{extendMe}
})=>({
    assign,attrs$getDArr,tokens$getArr_str,
    firstName:shortName,
    constructor:{shortName$getStr}
})=>(fullName)=>{
    const [{args$arr_str},...tokens$arr_obj]=tokens$getArr_obj();
    assign({tokens$arr_obj,
        shortName:args$arr_str.join('_')
    });
    const {attrs:{
        spice:{name:spiceName},
        nodeFlavor:{tokenName:nodeFlavor}
    }}=assign({
        attrs:attrs$getDArr(),
        firstName:tokens.reduce(
            (firstName,{token$str,isVisible})=>(isVisible?firstName+'$'+token$str:firstName),
            shortName
        )
    });
    assign({spiceName,nodeFlavor,
        isPresent:nodeFlavor==='present' && shortName==='present'
    })
}
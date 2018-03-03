export  default ({
    external:{t}
})=>({},{
    parent:{filteredNodes$getObj}
})=>({filter,nodeSpecs,onError$str})=>{
    const nodes=filteredNodes$getObj({nodeSpecs,filter});
    const entries=Object.entries(nodes);
    t.assert(entries.length<=1,onError$str);
    return !!entries.length && entries[0].value
}
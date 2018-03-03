export default ()=>({
    $class:{attrDefs$obj}
})=>()=>({
    tokenNames:Object.keys(attrDefs$obj),
    defaultTokenName:'space'
})
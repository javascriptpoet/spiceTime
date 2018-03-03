export default ({
    externals:{t},
    types:{tcombType}
})=>t.refinement(tcombType,(val)=>t.struct({
    $:t.Object
}).is(...val))
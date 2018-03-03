export default ({
    externals:{t}
})=>t.refinement(t.Function,(val)=>t.struct({
    is:t.Function
}).is({...val}))
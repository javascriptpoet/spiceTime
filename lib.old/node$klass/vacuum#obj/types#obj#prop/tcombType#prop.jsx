export default ({
    externals:{t}
})=>t.refinement(t.Function,(type)=>t.struct({
    is: t.func(t.Any, t.Boolean),
    meta:t.Object
}).is({...type}))
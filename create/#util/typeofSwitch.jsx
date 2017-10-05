export default ({externals:{
    _,t
}})=>({other,errMsg='type error',...mapFuncs})=>(val)=>(
    mapFuncs[`${typeof val}`] ||
    (Array.isArray(val) && mapFunks['array']) ||
    other ||
    ()=>t.assert(false,errMsg)
)(val)

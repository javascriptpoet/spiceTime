export default ({externals:{
    _,t
}})=>({other,errMsg='type error',...mapFuncs})=>(val)=>(
    mapFuncs[`${typeof val}`] ||
    (Array.isArray(val) && mapFuncs['array']) ||
    other ||
    ()=>t.assert(false,errMsg)
)(val)

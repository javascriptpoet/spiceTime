export default ({
    utils:{descriptors$process}
})=>({scope})=>(filterProps=()=>true)=>descriptors$process().of(scope).filter(filterProps).mount({})
export default ({
    external:{t}
})=>(map)=>(val)=>{
    t.list(t.struct({
        fromT:t.maybe(t.Function),
        toVal:t.Function
    },{default:{
        fromT:t.Any
    }})).is(map);
    const matchedMapping= map.find(
        ({fromT})=>fromT.is(val)
    );
    assert(!matchedMapping,`bad type of val=${val}`)
    return matchedMapping.toVal(val)
}
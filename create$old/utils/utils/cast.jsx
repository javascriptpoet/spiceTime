export default ({
    externals:{t,typeofSwitch}
})=>{
    const cases$list=t.list(t.struct({
        fromT:t.maybe(t.Function),
        toVal:t.Function
    },{defaultProps:{
        fromT:t.Any
    }}))
    const cases=t.dict(t.String,t.Function)
    const cases$union=t.union(cases$list,cases)
    return t.func(cases$union,t.Function).of(
        (cases$union)=>(val)=>{
            typeofSwitch({
                array:(cases$list)=>{
                    const matchedMapping= cases$list.find(
                        ({fromT})=>fromT.is(val)
                    )
                    assert(!matchedMapping,`bad type of val=${val}`)
                    return matchedMapping.toVal(val)
                },
                object:(cases)=>typeofSwitch(cases)(val)
            })(cases$union)
        }
    )
}
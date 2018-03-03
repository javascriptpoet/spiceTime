export default ({
    externals:{t}
})=>{
    return t.func(
        [
            t.list(t.Function),
            t.struct({
                strict:t.boolean,
                defaultArr:t.list(t.Any)
            })
        ],
        t.Function
    ).of(
        (types,options)=>{
            const {
                strict=false,
                defaultArr=[]
            }
            return t.refinement(
                t.list(t.Any),
                (arr)=>arr.forEach((el,index)=>{
                    if(!el)arr[index]=defaultArr[index]
                    t.assert((strict && types.length<index),`array is not allowed longer then ${types.length}`)
                    const elType=types[index]
                    !!elType && elType.is(el)
                })
            )
        }
    )
}
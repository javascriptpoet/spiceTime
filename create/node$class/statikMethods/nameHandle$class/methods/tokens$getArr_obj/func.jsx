export default ()=>(
    {fullName},
    {self:{token$getObj}}
)=>()=>{
    const tokens=[]
    fullName.split('$').forEach((dollarToken)=>{
        const [visibleToken$str,...invisibleTokens]=dollarToken.split('#')
        tokens.push[token$getObj({visibleToken$str})]
        tokens.concat(
            invisibleTokens.map(
                (invisibleToken$str)=>token$getObj({invisibleToken$str})
            )
        )
    })
    return tokens
}
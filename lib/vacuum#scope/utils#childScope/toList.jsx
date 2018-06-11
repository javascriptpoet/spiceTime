export default ()=>({cast$get})=>(tType)=>(val)=>t.list(tType)(
    cast$get([
        {
            fromT:t.Array,
            toVal:(list)=>(list)
        },
        {
            fromT:tType,
            toVal:(val)=>[val]
        }
    ])(val)
)
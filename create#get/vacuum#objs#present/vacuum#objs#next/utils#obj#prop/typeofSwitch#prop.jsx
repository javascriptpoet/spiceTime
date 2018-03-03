export default ({t,_})=>({
    errMsg='type error',
    other:otherFunc,
    ...typeFuncs
})=>(val)=>_.compose(
    (typeFunc)=>(typeFunc || t.assert(false,errMsg)),
    (type)=>(typeFuncs[type] || otherFunc),
    ()=>{
        if(Array.isArray(val))return 'array'
        return typeof val
    }
)()


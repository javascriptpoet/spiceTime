export default ({utils,
    externals:{t,_}
})=>({
    errMsg='type error',
    other:otherFunc,
    ...typeFuncs
})=>{
    utils.typeofSwitch=(val)=>_.compose(
        (typeFunc)=>(typeFunc || t.assert(false,errMsg)),
        (type)=>(typeFuncs[type] || otherFunc),
        ()=>{
            if(t.Array.is(val))return 'array'
            return typeof val
        }
    )()
}


export default ({utils,
    externals:{t,_}
})=>Object.assign(utils,{
    typeofSwitch:({
        errMsg='type error',
        other:otherFunc,
        ...typeFuncs
    })=>(val)=>_.compose(
        (typeFunc)=>(typeFunc || t.assert(false,errMsg)),
        (type)=>(typeFuncs[type] || otherFunc),
        ()=>{
            if(t.Array.is(val))return 'array'
            return typeof val
        }
    )()
}).typeofSwitch



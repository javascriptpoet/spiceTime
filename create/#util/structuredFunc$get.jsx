export default ({
    external:{_}
})=>({
    extendMe
})=>({func,statics,wrapperProps})=>{
    const wrappedFunc=(props)=>{
        Object.assign(wrappedFunc,{props})
        return func(wrapperProps)(wrappedFunc)(extendMe(props))
    };
    extendMe(wrappedFunc);
    return Object.defineProperties(wrappedFunc,
        _.mapObject(
            {...statics,
                assign:()=>(self)=>(props)=>Object.assign(self,props)
            },
            (statik,name)=>({
                get:()=>statik(wrapperProps)(wrappedFunc),
                set:(val)=>{wrappedFunc[name]=val}
            })
        )
    )
}

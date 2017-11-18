export  default  ({_,
    me:external
})=>({typeofSwitch,
    me:util
})=>(wrapped)=>{
    const wrapperProps={external,util};
    const unwrapFunc=(wrappedFunc)=>wrappedFunc(wrapperProps);
    return typeofSwitch({
        object:(wrappedFuncs)=>_.mapObject(wrappedFuncs,(wrappedFunc)=>unwrapFunc(wrappedFunc)),
        function:(wrappedFunc)=>unwrapFunc(wrappedFuncs)
    })(wrapped)
}
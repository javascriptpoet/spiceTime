export default (vacuum)=>({
    wrappedLocal:selfWrapped,
    scope:{me:scope,$:{populate}}
})=>{
    const {
        present:wrappedPresent=()=>({$:{locals}})=>locals,
        ...wrappedLocals
    }=typeofSwitch({
        object:(wrappedLocals)=>wrappedLocals,
        function:(present)=>({present})
    })(selfWrapped)
    populate(wrappedLocals)
    return {
        get:()=>wrappedPresent(vacuum)(scope),
        set:(value)=>t.assert(false,`${name} can not be set to ${value} in scope ${scope}`)
    }
}




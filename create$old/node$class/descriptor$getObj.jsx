export default ()=>()


(vacuum)=>()=>({wrappedLocals,
    scope:{me:scope,$:{populate}}
})=>{
    const {
        present:wrappedPresent=()=>({$:{locals}})=>locals,
        ...wrappedSpace
    }=typeofSwitch({
        object:(wrappedLocals)=>wrappedLocals,
        function:(present)=>({present})
    })(wrappedLocals)
    populate(wrappedSpace)
    return {
        get:()=>wrappedPresent(vacuum)(scope),
        set:(value)=>t.assert(false,`${name} can not be set to ${value} in scope ${scope}`)
    }
}
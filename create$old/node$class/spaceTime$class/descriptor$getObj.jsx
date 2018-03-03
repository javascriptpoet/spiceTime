export default ({
    externals:{t}
})=>()=>({
    wrappedLocals:{get,path,
        nameHandle:{fullName},
        me:node,
    },
    scope:{me:spaceTime,$}
})=>({
    get:()=>get(spaceTime),
    set:(value)=>t.assert(false,`${path}/${fullName} can not be set to ${value}`)
})

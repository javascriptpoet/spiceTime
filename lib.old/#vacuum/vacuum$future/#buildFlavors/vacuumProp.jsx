export default ({unvacuum,
    utils:{extendMe}
})=>({name,propInVacuum,hostVacuum,
    type='notObj'
})=>{
    const prop$extender=unvacuum(propInVacuum)
    const prop=(type==='obj')?Object.assign(hostVacuum[name] || extendMe({}),prop$extender):prop$extender
    hostVacuum[name]=prop
}

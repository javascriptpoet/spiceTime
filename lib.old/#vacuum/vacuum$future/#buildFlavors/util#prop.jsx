export default ()=>({utilInVacuum,name,
    hostVacuum:{me:hostVacuum,utils={}}
})=>({hostVacuum,utilInVacuum,name})=>({hostVacuum,
    name:'utils',
    propInVacuum:({unvacuum})=>({
        [name]:unvacuum(utilInVacuum)
    }),
    type:'obj',
})

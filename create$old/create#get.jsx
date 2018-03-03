export default ()=>({node$class})=>({fullName,vacuum,
    node$class=node$class,
    require:topAppRequire
})=>(
    new node$class({topAppRequire,fullName,vacuum}).get({})
)
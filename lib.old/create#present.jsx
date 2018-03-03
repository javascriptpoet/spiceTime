export default ()=>({node$klass})=>({fullName,vacuum,
    require:topAppRequire
})=>(
    new node$klass({topAppRequire,fullName,vacuum}).get()
)
export default ()=>({node$klass})=>({require,
    vacuum:pVacuum,
    space:pSpace,
    name='App'
})=>(new node$klass({
    fullName:name,
    pNode:{require,
        vacuum:pVacuum
    }
})).get(pSpace)
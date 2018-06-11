export default ({
    operators:{userSeed}
})=>({node$klass,userSeed})=>({require,
    name='App'
})=>{
    const {me:userSeedSpace,vacuum:userSeedVacuum}=userSeed()
    return (new node$klass({
        fullName:name,
        pNode:{require,
            vacuum:userSeedVacuum
        }
    })).get(userSeedSpace())
}
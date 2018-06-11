export default ({
    me:pastVacuum,
    utils:{toList}
})=>()=>function(fullNames$union){
    const {localInfos,
        path:userPath,
        vacuum:userVacuum
    }=this
    toList(t.String)(fullNames$union).forEach(
        (fullName)=>{
            const info=localInfos[fullName]
            t.assert(!!info,`node ${userPath}:local ${fullName} is populated before defined`)
            const {
                localInVacuum=()=>()=>{},
                nameHandle:{firstName},
            }=info
            pastVacuum.$.populate.bind(this)({
                [firstName]:localInVacuum
            })
        }
    )
    return userVacuum
}

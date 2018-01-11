export default ()=>({
    me:spaceTime,
    descriptor$getObj:pDescriptor$getObj
})=>({
    me:childSpaceTime,
    $:{
        me:child$,
        name:childName,
        p$:{local$:pLocal$={}}
    }
})=>{
    pLocal$[childName]=child$
    child$.locals$getObj
    const descriptor=pDescriptor$getObj()
}
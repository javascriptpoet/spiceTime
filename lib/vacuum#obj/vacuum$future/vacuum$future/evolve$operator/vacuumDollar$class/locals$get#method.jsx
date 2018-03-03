export default ({
    externals:{_},
    utils:{typeofSwitch}
})=>({container})=>{
    const localNames$list=_.keys(container)
    const arg$cast=(names$union=localNames$list)=>typeofSwitch({
        string:(name)=>[name],
        array:(names$list)=>names$list,
        function:(name$filter)=>_.filter(localNames$list,name$filter)
    })(names$union)
    return Object.assign(
        (names$union)=>Object.defineProperties(
            {},
            _.pick(
                Object.getOwnPropertyDescriptors(container),
                ...arg$cast(names$union)
            )
        ),
        {arg$cast}
    )
}
export default ({
    utils:{spice$get},
    externals:{_}
})=>()=>(flavorVacuum)=>{
    flavorVacuum.$.evolveChildScope(['flavors']).$.expand({
        spice:{

        }
    })
}


    (flavorSpace)=>{
    const spices=_.reduce(
        flavorSpace.$.spaceInfos,
        (spices,{
            nameHandle:{flavorName,

                firstName:spiceName
            }
        })=>(
            
        ),
        []
    )
}
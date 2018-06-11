export  default ()=>({instance:{assign,attrs$getObjs,tokens$getObjArr}})=>(fullName)=>{
    const {
        tokens:[{args:shortNameArgs},...tokens]
    }=assign({fullName,
        tokens:tokens$getObjArr()
    })
    const {shortName}=assign({tokens,
        shortName:shortNameArgs.join('_')
    })
    const {
        attrs:{flavor:{name:flavorName}}
    }=assign({
        attrs:attrs$getObjs(),
        firstName:tokens.reduce(
            (firstName,{token$str,isVisible})=>(isVisible?firstName+'$'+token$str:firstName),
            shortName
        )
    })
    assign({flavorName,
        isPresentNode:flavorName==='present' && shortName==='present'
    })
}
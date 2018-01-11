export  default ()=>()=>{
    const attrDefs={
        spice:{
            tokenIndex:0,
            defaultToken$str:'val',
            props$get:([spiceName,...args])=>({args,
                name:spiceName
            })
        },
        supr:{
            tokenIndex:1,
            props$get:(args)=>({shortName:args.join('_')})
        }
    }
    return {
        space:{...attrDefs},
        future:{...attrDefs},
        present:{spice:attrDefs.spice}
    }
}

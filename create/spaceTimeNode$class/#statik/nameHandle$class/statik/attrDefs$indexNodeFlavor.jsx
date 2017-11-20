export  default ()=>()=>{
    const spiceAttr={
        name:{
            full:'spice',
            short:'s'
        },
        defaultToken$str:'val',
        props$get:([spiceName,...args])=>({args,
            name:spiceName
        })
    };
    const suprAttr={
        name:{
            full:'supr',
            short:'su'
        },
        props$get:(args)=>({shortName:args.join('_')})
    };
    return {
        space:{
            numberedAttrs$arr:[spiceAttr,suprAttr]
        },
        future:{
            numberedAttrs$arr:[spiceAttr,suprAttr]
        },
        present:{
            numberedAttrs$arr:[spiceAttr]
        }
    }
}

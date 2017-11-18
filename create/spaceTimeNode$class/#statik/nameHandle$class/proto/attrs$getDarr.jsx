export  default ({
    external:{_,t},
    util:{extendMe}
})=>(
    {tokens,fullName,
        constructor:{attrDefs$obj:{
            named$obj:namedAttrDefs={},
            numbered$arr:numberedAttrDefs=[]
        }}
    }
)=>()=>{
    const numberedAttrs=[];
    const attr$getDarr=({
        token:{name,args},
        attrDef:{props$getObj=()=>{}}
    })=>extendMe(Object.assign(args,{name,
        props:props$getObj(args)
    }));
    const installAttr=({token,attrDef,attrName,isNumbered})=>{
        if(attrName)Object.assign(numberedAttrs,{
            [attrName]:attr$getDarr({token,tokenName,attrDef})
        });
        if(isNumbered)numberedAttrs.push(attr$getDarr({token,attrDef}))
    };
    const tokens=_.reduce(
        namedAttrDefs,
        (tokens,attrDef,attrName)=>{
            const {tokenNames,defaultToken}=attrDef;
            const index=tokens.findIndex(([firstArg])=>tokenNames.contains(firstArg));
            const [
                token=defaultToken
            ]=tokens.splice(index,1);
            const [name,...args]=token;
            !!token && installAttr({attrDef,attrName,
                token:{name,args}
            });
            return tokens
        },
        [...tokens]
    );
    numberedAttrDefs.forEach(({attrName,defaultToken},index)=>{
        const [token]=tokens.splice(index,1);
        installToken({attrName,
            token:{args:token || defaultToken},
            attrDef:numberedAttrDefs[index],
            isNumbered:true
        })
    });
    t.assert(!tokens.length,`${fullName}: undeclared tokens ${tokens}. Check spelling of token names`);
    return extendMe(numberedAttrs)
}


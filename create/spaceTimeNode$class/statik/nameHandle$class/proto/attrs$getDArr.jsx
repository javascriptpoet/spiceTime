export  default ({
    external:{_,t},
    util:{extendMe}
})=>(
    {tokens$arr_obj,fullName,
        tokens$getArr_obj:{token$getObj},
        constructor:{
            attrDefs$indexNodeFlavor:attrDefs,
            nodeFlavor$getNamedAttrDef:nodeFlavorAttrDef
        }
    }
)=>()=>{
    const numberedAttrs=[];
    const attr$getObj=({namedToken,numberedToken,attrDef:{
        props$getObj=()=>{},
        name:attrName
    }})=>{
        const attr$get=(args,name)=>({args,name,
            props:props$getObj(args)
        })
        if(namedToken){
            const {args$arr_str:[tokenName,...args]}=namedToken
            return attr$get(args,tokenName)
        }
        if(numberedToken)return attr$get(numberedToken.args$arr_str,attrName)
        return {}
    }
    const installAttr=({namedToken,numberedToken,attrDef})=>{
        const attr=attr$getObj({namedToken,numberedToken,attrDef})
        Object.assign(numberedAttrs,{
            [attr.name]:attr
        })
        if(numberedToken)numberedAttrs.push(attr)
    }
    const namedToken$splice=({tokens,
        namedAttrDef:{tokenNames,defaultToken$str}
    })=>{
        const index=tokens.findIndex(
            ({args$arr_str:[tokenName]})=>tokenNames.contains(tokenName)
        );
        const [
            token=token$getObj({invisibleToken$str:defaultToken$str})
        ]=tokens.splice(index,1);
        return token
    }
    const tokens=[...tokens$arr_obj];
    const {namedAttrDefs,attrDefs}=token$splice({tokens,
        attrDef:nodeFlavorAttrDef
    })
    const tokens=_.reduce(
        namedAttrDefs,
        (tokens,namedAttrDef,attrName)=>{
            installAttr({
                namedToken:namedToken$splice({attrDef,tokens}),
                namedAttrDef:{...attrDef,
                    name:attrName
                }
            });
            return tokens
        },
        tokens
    )
    numberedAttrDefs.forEach((attrDef,index)=>{
        const {defaultToken$str=''}=attrDef;
        const [
            numberedToken={
                args$arr_str:defaultToken$str.split('_')
            }
        ]=tokens.splice(index,1)
        installAttr({numberedToken,attrDef})
    })
    t.assert(!tokens.length,`${fullName}: undeclared tokens ${tokens}. Check spelling of token names`)
    return extendMe(numberedAttrs)
}


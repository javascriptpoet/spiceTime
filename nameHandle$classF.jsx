//TODO introduce ',' for invisible attrArg
export default ({
    utils:{base$class,extendMe}
})=>({
    node:{vacuum}
})=>()=>class NameHandle extends base$class {
    constructor(fullName){
        super()
        extendMe(this)
        this.assign({fullName})
        const {
            tokens:[{args:shortNameArgs},...tokens]
        }=this.tokens$listF()
        const {shortName}=this.assign({tokens,
            shortName:shortNameArgs.join('_')
        })
        const {
            flavorAttr:{name:flavorName}
        }=this.assign({
            flavorAttr:this.namedAttr$f('flavor'),
            firstName:tokens.reduce(
                (firstName,{token$str,isVisible})=>(isVisible?firstName+'$'+token$str:firstName),
                shortName
            )
        })
        this.assign({flavorName})
    }
    token$objF({visibleStr,invisibleStr}){return extendMe({
        isVisible:!!visibleStr,
        args:(visibleStr || invisibleStr).split('_')
    })}
    tokens$listF(){
        const tokens=[]
        this.fullName.split('$').forEach((dollarToken)=>{
            const [visibleStr,...invisibleStrs]=dollarToken.split('#')
            tokens.push[this.token$objF({visibleStr})]
            tokens.concat(
                invisibleStrs.map(
                    (invisibleStr)=>this.token$objF({invisibleStr})
                )
            )
        })
        return tokens
    }
    namedAttr$f(attrName){
        const {attrDefs}=vacuum
        const {defaultStr,...attrDef}=attrDefs[attrName]
        const tokenNames=Object.keys(vacuum[attrName])
        const index=this.tokens.findIndex(
            ({args:[tokenName,...args]})=>tokenNames.contains(tokenName)
        )
        const [
            token=this.token$objF({invisible$str:defaultStr})
        ]=this.tokens.splice(index,1)
        const {
            args:[name,...args]
        }=token
        return extendMe({name,args,...attrDef})
    }
}

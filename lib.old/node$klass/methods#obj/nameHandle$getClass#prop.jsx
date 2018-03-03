//TODO introduce ',' for invisible attrArg
//TODO add types as class statics
//TODO add error checking
export default ({
    utils:{base$class,extendMe}
})=>()=>({
    node:{vacuum}
})=>class NameHandle extends base$class {
    constructor(fullName){
        super()
        extendMe(this)
        this.assign({fullName})
        const {
            tokens:[{args:shortNameArgs},...tokens]
        }=this.tokens$getList()
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
    token$getObj({visibleStr,invisibleStr}){return extendMe({
        isVisible:!!visibleStr,
        args:(visibleStr || invisibleStr).split('_')
    })}
    tokens$getList(){
        const tokens=[]
        this.fullName.split('$').forEach((dollarToken)=>{
            const [visibleStr,...invisibleStrs]=dollarToken.split('#')
            tokens.push[this.token$getObj({visibleStr})]
            tokens.concat(
                invisibleStrs.map(
                    (invisibleStr)=>this.token$getObj({invisibleStr})
                )
            )
        })
        return tokens
    }
    namedAttr$get(attrName){
        const {attr:attrDefs}=vacuum
        const {defaultStr,...attrDef}=attrDefs[attrName]
        const tokenNames=Object.keys(vacuum[attrName])
        const index=this.tokens.findIndex(
            ({args:[tokenName,...args]})=>tokenNames.contains(tokenName)
        )
        const [
            token=this.token$getObj({invisible$str:defaultStr})
        ]=this.tokens.splice(index,1)
        const {
            args:[name,...args]
        }=token
        return extendMe({name,args,...attrDef})
    }
}

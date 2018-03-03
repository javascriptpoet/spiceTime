import tcombType from './tcombType#prop'
import extendedMe from './extendedMe#Any#prop'

export default ({
    externals:{t,unwrap}
})=>{
    const types=unwrap({tcombType,extendedMe})
    const typeClassProps$type=t.refinement(
        t.struct({
            types:t.dict(t.String,types.tcombType),
            defaults:t.dict(t.String,t.Any),
        },{defaultProps:{
            types:{},
            defaults:{}
        }}),
        (val)=>types.extendedMe.is(val)
    )
    return t.refinement(
        t.struct({
            statiks$types:t.dict(t.String,types.tcombType),
            props:t.dict(t.String,types.tcombType),
            args$types:t.list(types.tcombType)
        },{defaultProps:{
            statiks$types:{},
            props$types:{},
            args$types:[]
        }}),
        (val)=>{
            types.extendedMe.is(val)

        }
    )
}
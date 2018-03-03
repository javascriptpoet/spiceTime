import tcombType from './tcombType#prop'
import extendedMe from './extendedMe#Any#prop'
import typeDollar from './typeDollar#obj#prop'

export default ({
    externals:{t,unwrap}
})=>{
    const types=unwrap({tcombType,extendedMe,typeDollar})
    return t.refinement(types.tcombType,(val)=>{
        types.extendedMe.is(val) &&
        t.struct({
            $:types.typeDollar
        },{defaultProps:{
            $:{}
        }}).is({...val})
    })
}
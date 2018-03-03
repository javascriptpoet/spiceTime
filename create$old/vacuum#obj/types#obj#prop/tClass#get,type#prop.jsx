import type$type from './type#tcombType#prop'
import extendedMe$type from './extendedMe#Any#prop'

export default ({
    externals:{t,unwrap}
})=>{
    const type=unwrap(type)
    return t.refinement(
        t.func(t.Any,unwrap(type$type)),
        (tClass)=>{
            extendedMe$type(tClass)
            t.struct({
                $:t.struct({
                    args$types:t.Array
                },{defaultProps:{
                    args$types:[]
                }}).is({...tClass})
            })
        }
    )
}
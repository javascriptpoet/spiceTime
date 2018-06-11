import sTypeSpecs from './sTypeSpecs'
import sType$wwGet from './sType$wwGet'

export default ({
    externals:{unwrap,_,extendMe}
})=>{
    const sType$wwGet=unwrap(sType$wwGet)
    const sTypeSpecs=unwrap(sTypeSpecs)
    return {sType$wwGet,
        ..._.objectMap(sTypeSpecs,(sTypeSpec)=>sType$wwGet(
            extendMe(sTypeSpec)
        ))
    }
}


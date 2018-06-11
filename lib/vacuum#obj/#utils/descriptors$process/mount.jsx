import extendMe from '../extendMe'
export default ({
    externals:{unwrap}
})=>({descriptors})=>(target)=>unwrap(extendMe)(
    Object.defineProperties(target,descriptors)
)
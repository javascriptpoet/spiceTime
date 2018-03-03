export default ({
    utils:{typeofSwitch,me:utils}
})=>{
    utils.base$class=class base$class {
        assign(props){return Object.assign(this,props)}
        mount(descriptors$union){return Object.defineProperties(this,typeofSwitch({
            object:(descriptors$obj)=>descriptors$obj,
            function:(descriptors$getObj)=>descriptors$getObj(this)
        })(descriptors$union))}
        static instance$get(props){return new this(props)}
    }
}
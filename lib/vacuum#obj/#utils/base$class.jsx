export default ({
    utils:{typeofSwitch,extendMe}
})=>class base$class {
    constructor(){
        extendMe(this)
    }
    assign(props){return Object.assign(this,props)}
    mount(descriptors$union){return Object.defineProperties(this,typeofSwitch({
        object:(descriptors$obj)=>descriptors$obj,
        function:(descriptors$getObj)=>descriptors$getObj(this)
    })(descriptors$union))}
    static instance$get(props){return new this(props)}
}

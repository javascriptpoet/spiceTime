import typeofSwitch from './typeofSwitch'
import descriptor$process from './descriptors$process'

export default ()=>class base$class {
    constructor(){
        Object.assign(base$class.prototype,{
            assign:(props)=>Object.assign(this,props),
            mount:(mounter)=>Object.defineProperties(this,typeofSwitch({
                object:(descriptors)=>Object.defineProperties(this,descriptors),
                function:(descriptors$getObj)
            })(mounter))
        })
        Object.assign(base$class,{
            instance$get:(props)=>(new this.constructor(props))
        })
    }
    assign(props){return Object.assign(this,props)}
    mount(mounter){

    }
    static instance$get(props){return new this(props)}
}
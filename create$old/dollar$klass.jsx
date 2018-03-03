export default ({
    externals:{t,extendMe},
    utils:{klass$get}
})=>class {
    constructor(dollar$obj){
        extendMe(
            Object.assign(this,dollar)
        )
    }
    monetize(container){
        this.container=container
        return Object.defineProperty(container,'$',{
            value:this,
            enumerable:false,
            configurable:true
        })
    }
}
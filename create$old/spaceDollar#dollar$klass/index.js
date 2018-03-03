import constructor from './constructor'
import methods from './methods'

export default ({
    externals:{unwrap},
    utils:{class$get}
})=>class$get({
    name:'dollar',
    locals:{
        constructor:unwrap(constructor),
        methods:unwrap(methods)
    }}
)

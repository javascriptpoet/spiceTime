import constructor from './constructor'
import methods from './methods'

export default ({
    utils:{class$get:{selfish:selfishClass$get}}
})=>({unvacuum,
    me:dollar
})=>selfishClass$get({selfishLocals:{
    constructor:unvacuum(constructor),
    methods:unvacuum(methods),
    statiks:{
        dollar:()=>dollar
    }
}})
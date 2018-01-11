import nodeSpec$getObj from './nodeSpec$getObj';
import func from './func';

export default ({
    util:{unwrap}
})=>({},{self$get})=>self$get({
    func:unwrap(func),
    statik:unwrap({nodeSpec$getObj})
})
import func from './func';
import token$getObj from './token$getObj';

export default ({
    util:{unwrap}
})=>({},{self$get})=>self$get({
    func:unwrap(func),
    statik:unwrap({token$getObj})
})
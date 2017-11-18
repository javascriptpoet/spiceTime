import time$getObj from './time$getObj';
import func from './func';

export default ({
    util:{unwrap}
})=>({},{self$get})=>self$get({
    func:unwrap(func),
    statik:unwrap({time$getObj})
})
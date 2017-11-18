import homelessNodeSpec$get from './homelessNodeSpec$get';
import housedNodeSpec$get from './housedNodeSpec$get';
import func from './func';

export default ({
    util:{unwrap}
})=>({},{self$get})=>self$get({
    func:unwrap(func),
    statik:unwrap({homelessNodeSpec$get,housedNodeSpec$get})
})
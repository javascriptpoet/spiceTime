import localTime$get from './localTime$statik_get';
import localSpace$getAssigned from './localSpace$statik_getAssigned'
import func from './func';

export default ({
    util:{unwrap}
})=>({},{self$get})=>self$get({
    func:unwrap(func),
    statik:unwrap({localTime$statik_get,localSpace$statik_getAssigned})
})
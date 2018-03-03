import func from './func';
import spaceTime$getObj from './spaceTime$getObj';

export default ({
    util:{unwrap}
})=>({},{self$get})=>self$get({
    func:unwrap(func),
    statik:unwrap({spaceTime$getObj})
})
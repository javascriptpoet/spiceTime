import mountNodes from './mountNodes#get';
import func from './func';

export default ({
    util:{unwrap}
})=>({},{self$get})=>self$get({
    func:unwrap(func),
    statik:unwrap({
        'mountNodes#get':mountNodes
    })
})
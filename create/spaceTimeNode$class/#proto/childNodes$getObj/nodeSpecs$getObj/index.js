import updateNodeSpecs$getObj from './updateNodeSpecs$getObj';
import func from './func';

export default ({
    util:{unwrap}
})=>({},{self$get})=>self$get({
    func:unwrap(func),
    statik:unwrap({updateNodeSpecs$getObj})
})
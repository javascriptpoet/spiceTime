import filteredNodes$getObj from './filteredNodes$getObj';
import nodeSpecs$get from './nodeSpecs$get';
import onlyFilteredNode$getObj from './onlyFilteredNode$getObj';
import func from './func';

export default ({
    util:{unwrap}
})=>({},{self$get})=>self$get({
    func:unwrap(func),
    statik:unwrap({filteredNodes$getObj,nodeSpecs$get,onlyFilteredNode$getObj})
})
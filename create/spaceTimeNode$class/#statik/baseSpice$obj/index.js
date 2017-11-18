import get from './get#spice';
import val from './val#spice';
import func from './func';

export default ()=>({},{self$get})=>self$get({
    statik:unwrap({get,val})
})
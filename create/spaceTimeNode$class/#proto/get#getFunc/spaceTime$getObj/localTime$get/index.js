import present$update from './present$update';
import future$get from './future$get';
import func from './func';

export default ({
    util:{unwrap}
})=>({},{self$get})=>self$get({
    func:unwrap(func),
    statik:unwrap({past$getArr,present$update,future$get})
})
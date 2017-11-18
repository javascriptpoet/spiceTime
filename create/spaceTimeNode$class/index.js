import constructor from './constructor';
import proto from './#proto';
import statik from './#statik';

export default ({
    util:{structuredClass$get,unwrap}
})=>()=>structuredClass$get({
    constructor:unwrap(constructor),
    proto:unwrap(proto),
    statik:unwrap(statik)
})

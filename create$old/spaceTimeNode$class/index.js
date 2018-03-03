import constructor from './constructor';
import proto from './#proto';
import statik from './#statik';

export default ({
    utils:{structuredClass$get}
})=>()=>structuredClass$get({constructor,proto,statik})


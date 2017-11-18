import constructor from './constructor';
import proto from './proto';
import statik from './statik';

export default ({
    utils:{unwrap,
        structuredClass$get:{nameHandle$class,
            me:structuredClass$get
        }
    }
})=>()=>structuredClass$get({
    constructor:()=>({assign,
        me:nameHandle
    })=>(fullName)=>{
        assign(new nameHandle$class(fullName));
        unwrap(constructor)(nameHandle)(fullName)
    },
    proto:unwrap(proto),
    statik:unwrap(statik)
})

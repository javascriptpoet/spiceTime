import func from './func';
import statics from './#statics';

export default ({
    util:{structuredFunc$get},
    me:wrapperProps
})=>(
    node
)=>structuredFunc$get({wrapperProps,func,
    statics:{...statics,
        node:()=>()=>node
    }
})
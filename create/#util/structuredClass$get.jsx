import {_} from '../external';
import extendMe from './extendMe';

export default ({wrapperProps,
    constructor:wrappedConstructor,
    methods:{
        protos:wrappedProtoMethods,
        statics:wrappedStaticMethods
    }
})=>{
    extendMe(wrapperProps);
    const unselfMethods=({selfishMethods,self})=>_.mapObject(selfishMethods,
        (selfishMethod)=>(props)=>selfishMethod(self)(props)
    );
    const unwrapMethods=(wrappedMethods)=>_.mapObject(wrappedMethods,
        (wrappedMethod)=>wrappedMethod(wrapperProps)
    );
    class StructuredIfNotCultured {
        constructor(props){
            const {constructor:{prototype}}=this;
            const locals=unselfMethods({
                selfishlocals:unwrapMethods(wrappedProtoMethods),
                self:extendMe(this)
            });
            Object.assign(prototype,locals);
            Object.assign(this,{...props,
                props:extendMe(props),
                locals:extendMe(locals)
            });
            selfishConstructor(this)(props)
        };
        assign(props){
            return Object.assign(this,props)
        }
    };
    return Object.assign(StructuredIfNotCultured,unselfMethods(({
        selfishMethods:unwrapMethods(wrappedStaticMethods),
        self:StructuredIfNotCultured
    })))
}
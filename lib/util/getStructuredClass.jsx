import {_} from '../external';
import extendMe from './extendMe';

export default ({wrapperProps,
    constructor:wrappedConstructor,
    methods:{
        protos:wrappedProtoMethods,
        statics:wrappedStaticMethods
    }
})=>{
    const meWrapperProps=extendMe(wrapperProps);
    const installMethods=({wrappedMethods,self})=>{
        const selfishMethods=_.mapObject(wrappedMethods,
            (wrappedMethod)=>wrappedMethod(meWrapperProps)
        );
        return _.reduce(
            selfishMethods,
            (self,selfishMethod,name)=>Object.defineProperty(self,name,{
                get:()=>selfishMethod(self)
            }),
            extendMe(self)
        )
    };
    const selfishConstructor=wrappedConstructor(meWrapperProps);
    class StructuredIfNotCultured {
        constructor(props){
            installMethods({
                wrappedMethods:wrappedProtoMethods,
                self:this.constructor.prototype
            });
            Object.assign(this,props);
            selfishConstructor(
                extendMe(this)
            )(
                extendMe(props)
            )
        }
    };
    return Object.assign(StructuredIfNotCultured,installMethods(({
        wrappedMethods:wrappedStaticMethods,
        self:StructuredIfNotCultured
    })))
}
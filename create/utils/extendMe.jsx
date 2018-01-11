import descriptors$process from './assignDescriptors'

export default ({externals})=>(self,extender={})=>{
    if(!self)return;
    Object.defineProperty(self,'me',{
        writable:false,
        enumerable:false,
        value:self
    });
    return descriptors$process({externals})(extender).assignTo(self)
}
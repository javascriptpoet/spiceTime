export default ({assignDescriptors})=>(self,extender={})=>{
    if(!self)return;
    Object.defineProperty(self,'me',{
        enumerable:false,
        value:self
    });
    return assignDescriptors(self,extender)
}
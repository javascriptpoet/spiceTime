export default (self)=>{
    !!self && Object.defineProperty(self,'me',{
        writable:false,
        enumerable:false,
        value:self
    })
}
export default ()=>(self)=>{
    if(self)Object.defineProperty(self,'_me',{
        enumerable:false,
        value:self
    })
}
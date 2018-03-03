export default (...mes)=>mes.map(
    (me)=>Object.defineProperty(me,'me',{
        writable:false,
        enumerable:false,
        value:me
    })
)[0]




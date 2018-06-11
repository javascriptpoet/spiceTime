export default (...targets)=>targets.map(
    (target)=>Object.defineProperty(me,'me',{
        enumerable:false,
        get:function(){return this}
    })
)[0]




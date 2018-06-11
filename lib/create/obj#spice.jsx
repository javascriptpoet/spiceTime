export default ({
    me:pastVacuum,
    externals:{_}
})=>()=>({hostSpace,propsInSpace,
    name='instance',
    obj={}
})=>hostSpace.$.expand({
    [name]:Object.defineProperties(obj,
        _.mapObject(propsInSpace,(propInSpace,name)=>({
            get:_.once(
                function(){return hostSpace.$.unwrap(propInSpace)}
            ),
            set:function(val){this[name]=val},
            configurabe:true,
            enumerable:true
        }))
    )
})[name]


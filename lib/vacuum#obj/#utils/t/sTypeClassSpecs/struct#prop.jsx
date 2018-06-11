export default ({
    externals:{t,_}
})=>({
    tType:t.struct.bind(t),
    stArgs$types:[
        t.dict(t.String,t.Function),
        t.struct({
            strict:t.Boolean,
            defaultProps:t.Object
        },{defaultProps:{
            strict:false,
            defaultProps:{}
        }})
    ],
    tArgs$wGet:({name})=>({stArgs:[propTypes,options]})=>[propTypes,{...options,name}],
    dollar$getObj:({tType,stArgs:[props,options]})=>({props,options})
})

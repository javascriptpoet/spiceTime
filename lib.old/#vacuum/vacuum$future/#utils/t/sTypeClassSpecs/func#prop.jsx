export default ({
    externals:{t,_}
})=>({
    tType:t.func.bind(t),
    stArgs$types:[
       t.refinement(
           t.struct({
               props:t.dict(t.String,t.Function),
               args:t.list(t.Function),
               statiks:t
           })
       )
    ],
    tArgs$wGet:({name})=>({stArgs:[propTypes,options]})=>[propTypes,{...options,name}],
    dollar$getObj:({tType,stArgs:[props,options]})=>({props,options})
})
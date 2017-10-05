export default ({externals:{_,t}})=>{
    return {
        tUnion: ({
            of,
            dispatch
        })=>{
            const matchedType=of.find(
                (oneOfType)=>oneOfType.is(val)
            );
            const defaultDispatch=(val)=>t.union(of).dispatch(val);
            const myDispatch=dispatch? (val)=>dispatch({val,matchedType}):defaultDispatch(val)
            return Object.assign(t.union(of), {of,
                dispatch:myDispatch,
                is:(val)=>t.union(of).is(val)
            })
        },
        tFunc:({args,result})=>Object.assign(t.func(args,result),{args,result}),
        tStruct:(props)=>Object.assign(t.struct(props),{props}),
        tUndefined:t.irreducable('undefined',(val)=>val===undefined),
        tEmptyObject:t.irreducable('emptyObject',(val)=>(t.Object.is(val) && _.keys(val).length===0)),
        tArray:(typeList)=>{
            const is=(arr)=>arr.forEach(
                (item,index)=>typeList[index].is(item)
            );
            const tArray=arr.map(
                (item,index)=>typeList[index](item)
            );
            return Object.assign(tArray,is);
        }
    }
}
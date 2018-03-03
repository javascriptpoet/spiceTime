import types from '../../types#obj#prop'

export default ({
    externals:{t,unwrap,dollar$mount}
})=> {
    const types=unwrap(types)
    const tClassArgs$types=[t.Any,t.struct({
        name:t.maybe(t.String)
    })]
    const props$types={tClassArgs$types,
        tcombClass:types.tcombClass,
        tcombClassArgs$get:t.func(tClassArgs$types,t.Array),
        typeDollar$getObj:t.func(tClassArgs$types,types.typeDollar),
        typeStatiks$getFuncs:t.func(types.tcombClass,t.dict(t.String,t.Any))
    }
    const props$type=dollar$mount(
        t.struct(props$types,{defaultProps}),
        {props$types,defaultProps}
    )
    return dollar$mount(
        t.func(props$type,types.tClass),
        {props$types,defaultProps,
            result$type: types.tClass
        }
    )
}
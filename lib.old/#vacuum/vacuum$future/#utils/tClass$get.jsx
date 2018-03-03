export default ({
    externals:{t,_},
    utils:{monetize},
    types:{tcombType,tType}
})=> {
    const props = t.struct({
        tBaseClass: tcombType,
        tBaseClassArgs$get: t.func(t.Object, t.Array),
        tClassProps$types: t.dict(t.String, tcombType)
    }, {
        defaultProps: {
            tClassProps$types: {}
        }
    })
    const func$type = t.func(props, tType)
    const func=func$type.of(
        ({
            tBaseClass, tBaseClassArgs$get,
            tClassProps$types = {}
        })=>(tClassProps)=> {
            t.struct(tClassProps$types).is(tClassProps)
            const type = tBaseClass(...tBaseClassArgs$get(tClassProps))
            return monetize({...tClassProps,
                container:type
            })
        }
    )
    return monetize({props,
        result:tType,
        target:func
    })
}
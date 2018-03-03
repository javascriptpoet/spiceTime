export default ({
    externals:{extendMe,_,topRequire,unwrap,t}
})=> {
    const dollar$klass = unwrap(topRequire('./dollar$klass'))
    const get$spice = t.func(
        struct({
            get: t.Function,
            get$type: t.Function,
            statiks: t.Object
        }, {
            defaultProps: {
                get$type: t.Function,
                statiks: {}
            }
        }),
        t.Function
    ).of(
        ({get,get$type,statiks})=> {
            const statikMethods = {
                ...statiks,
                extend: ({
                    get:extenderGet = get,
                    get$type:extenderGet$type = get$type,
                    statiks:extenderStatiks = {}
                })=>get$spice({
                    get: extenderGet,
                    get$type: extenderGet$type,
                    statiks:{...statiks,...extenderStatiks}
                })
            }
            (new dollar$klass({
                statiks: _.mapObject(statikMethods, ({$ = {type: t.Any}})=>$.type)
            })).monetize(
                extendMe(get$type)
            )
            return (new dollar$klass({
                $: {type: get$type}
            })).monetize(
                extendMe(Object.assign(get$type.of(get), statikMethods))
            )
        }
    )
    return get$spice
}
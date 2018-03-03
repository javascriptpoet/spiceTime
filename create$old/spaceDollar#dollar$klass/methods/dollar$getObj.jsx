export default ({
    externals:{_,extendMe},
    utils:{descriptors$process}
})=>({
    scopeOperators$class,scopeName,pScopeName
})=>({
    $:p$={scopeName},
    me:dollarFreeScope
})=>(
    new scopeOperators$class(dollarFreeScope)
).drop(
    extendMe(_.objectCreate(p$,{p$,
        pScope:p$.scope,
        [pScopeName]:p$.scope,
        scope:dollarFreeScope
    }))
)


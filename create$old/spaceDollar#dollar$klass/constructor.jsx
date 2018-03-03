export default ({
    externals:{_,capitalizeFirstChar},
    utils:{descriptors$process}
})=>({assign})=>({descriptor$getObj,scope,scopeName='space'})=>assign({descriptor$getObj,scopeName,
    pScopeName:`p${capitalizeFirstChar(scopeName)}`
})
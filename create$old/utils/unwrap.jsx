export default ({utils,
    externals:{unwrap$getFunc,
        me:externals
    }
})=>unwrap$getFunc({
    wrapperProps:{externals,utils}
})

export default ({
    externals:{_}
})=>({
    node:{spaceFlavor,
        vacuum:{childInfos:{$:{spaceInfos,
            presentInfo:{childInSpace:presentInSpace},
            futureInfo:{childInSpace:futureInSpace}
        }}},
        me:node
    }
})=>({pastSpace})=>{
    const space=spaceFlavor(
        node.evolveSpace({pastSpace})
    )
    _.each(spaceInfos,({childInSpace,populateParentSpace})=>populateParentSpace({childInSpace,
        pastSpace:space
    }))
    const present=presentInSpace(space)
    !!present && space.$.assign({present})
    return futureInSpace(space)
}
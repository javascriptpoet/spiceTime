export default ({
    utils:{class$get:{selfish:selfishClass$get}}
})=>({methods,constructor,create,vacuum})=>{
    const node$class=selfishClass$get({selfishLocals:{
        constructor,methods
    }})
    return create({require,vacuum,node$class,
        fulName: 'futureNode$class'
    })
}
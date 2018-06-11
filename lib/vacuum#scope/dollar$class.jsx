export default ({me:vacuum,utils:{createScope}})=>vacuum.$.$assign({
    unwrap:function(wrappedLocal){
        return wrappedLocal(this.vacuum)(createScope('space'))
    }
}).$$
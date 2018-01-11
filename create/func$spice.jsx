export default ({externals:{_}})=>()=>({
    verb:({
        hostWrappedSpace:{
            statik:wrappedStatiks={},
            statikMethod:wrappedStatikmethods={}
        },
        hostSpaceTime:{$,me:statikSpaceTime}
    })=>{
        const allWrappedStatiks={...wrappedStatikMethods,...wrappedStatiks}
        const hasStatics=!_.isEmpty(allWrappedStatiks)
        const {
            $:{locals:statikMethods},
            time:{tic}
        }=statikSpaceTime.$.populate(wrappedStatikMethods)
        statikSpaceTime.$.populate(wrappedStatiks)
        return Object.assign(hasStatics?tic(statikSpaceTime):tic(),statikMethods)
    },
    noun:({hostSpaceTime:{time:{tic}}})=>(...args)=>tic()(...args)
})


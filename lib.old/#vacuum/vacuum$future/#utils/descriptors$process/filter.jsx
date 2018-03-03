import typeofSwitch from '././typeofSwitch'

export default ({externals})=>({descriptors,self$process})=>({
    each:eachFilter,
    all:allFilter
})=>{
    const typeofSwitch=typeofSwitch({externals})
    const descriptors=(()=>{
        if(eachFilter)return _.reduce(
            descriptors,
            (filteredDescriptors,descriptor,name)=>typeofSwitch({
                boolean:(isIncluded)=>(
                    isIncluded?{...filteredDescriptors,[name]:descriptor}:filteredDescriptors
                ),
                object:(descriptor)=>({...filteredDescriptors,[name]:descriptor})
            })(
                eachFilter(descriptor,name)
            )
        )
        return allFilter(descriptors)
    })()
    return self$process(Object.defineProperties({},descriptors))

}
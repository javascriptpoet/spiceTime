export default ()=>({},
    {self:{nodeSpecs$getObj,filteredNodes$getObj,onlyFilteredNode$getObj}}
)=>()=>{
    const nodeSpecs=nodeSpecs$getObj();
    return {
        present:onlyFilteredNode$get({nodeSpecs,
            filter:({nameHandle:{isPresent}})=>isPresent,
            onError$str:'multiple presents'
        }),
        space:filteredNodes$getObj({nodeSpecs,
            filter:({nameHandle:{nodeFlavor}})=>(nodeFlavor==='space')
        }),
        future:onlyFilteredNode$get({nodeSpecs,
            filter:({nameHandle:{nodeFlavor}})=>(nodeFlavor==='future'),
            onError$str:'multiple futures'
        })
    }
}
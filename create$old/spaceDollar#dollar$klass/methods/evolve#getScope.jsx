export default ()=>({drop,scope})=>(expander)=>drop(
    Object.create(scope)
).$.expand(expander)
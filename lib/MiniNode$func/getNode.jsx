export default ()=>({constructor})=>Object.assign(
    (props)=>{new constructor(props)},
    {
        isInstanceOf:(testClass)=>{testClass instanceof constructor}
    }
)
export default ()=>()=>({visibleToken$str,invisibleToken$str})=>{
    const split=(str)=>str.split('_')
    if(visibleToken$str)return {
        isVisible:true,
        args$arr_str:split(visibleToken$str)
    };
    if(invisibleToken$str)return {
        args$arr_str:split(invisibleToken$str)
    };
    return {}
}
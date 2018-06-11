export default ({
    utils:{extendMe}
})=>(me,...statiks)=>extendMe(
    Object.assign(me,statiks)
)


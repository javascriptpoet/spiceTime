export default ({
    utils:{cast,ut},
    externals:{_,t}
})=>(dollar$klass)=>{
    const moneySink=t.union(t.Object,t.Function,t.Array)
    const moneySinks=t.dict(t.String,moneySink)

    return (self)=>(moneySink$union)=>dollar$klass()
}
export default ({
    utils:{assignDescriptors}
})=>(spaceTime)=>class baseClass {
    assign(props){return Object.assign(this,props)}
    static instance$get(props){return new this(props)}
}
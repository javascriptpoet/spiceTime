export default ({
    utils:{extendMe}
})=>function({container,$}){return Object.defineProperty(extendMe(container),'$',{
    value:new this({container,$}),
    enumerable:false,
    configurable:false
})}
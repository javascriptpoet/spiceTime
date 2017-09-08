export default ({NameHandle,
    externals:{_,extendMe}
})=>({dict,
    getDict=()=>dict
})=>{
    const {NameHandle,externals:{_}}=wrapperProps;
    const getInfo=(info,name)=>{
        const nameHandle=new NameHandle({name});
        return extendMe({info,...info,...nameHandle,nameHandle})
    };
    return class NameHandler {
        constructor() {
            _.bindAll(this, 'reduce', 'each', 'mapObject','filter','filerBySpice','getDict','find','map');
            this.initDict=getDict();
        };
        find(predicate){
            const dict=getDict();
            const key=_.findKey(dict,(info,name)=>predicate(getInfo(info,name)));
            return key?dict[key]:undefined
        };
        reduce(reducer, initVal) {
            return _(getDict()).reduce(
                (reducing,info,name)=>reducer(reducing, getInfo(info,name)),
                initVal
            )
        };
        each(each) {
            return _(getDict()).each(
                (info,name)=>each(getInfo(info,name))
            )
        };
        mapObject(getVal) {
            return this.reduce((obj,{firstName,...restInfo})=>({...obj,
                [firstName]:getVal({firstName,...restInfo})
            }),{})
        };
        map(getVal){
            return this.reduce((arr,info)=>[...arr,getVal(info)],[])
        };
        filter(predicate){
            //this returns a new handler of filtered names.
            //do newHandler.value() to get filtered results
            return getNameHandler({
                getDict:()=>this.reduce((filtered,info)=>{
                    const {name,...restInfo}=info;
                    return predicate(info)?{...filtered,
                        [name]:{name,...restInfo}
                    }:filtered
                },{})
            })
        };
        filterBySpice(targetSpiceName) {
            return this.filter(
                ({spice:spiceName})=>(spiceName === targetSpiceName)
            )
        };
        getDict(propName){
            return this.mapObject((info)=>info[propName])
        }
    }
}
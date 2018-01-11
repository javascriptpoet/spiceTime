export  default ()=>()=>({
    verb:({get,
        spaceTime:{
            me:spaceTime,
            $:{parent,nameHandle:{firstName}}
        }
    })=>{
        const val=get(spaceTime);
        parent[firstName]=val;
        return val
    }
})
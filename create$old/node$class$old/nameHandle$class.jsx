export  default ()=>()=>class nameHandle$class {
    constructor(fullName){
        const [firstName,spiceName='val']=fullName.split(/$|#/g);
        Object.assign(this,{firstName,fullName, spiceName,
            me:this
        })
    }
}
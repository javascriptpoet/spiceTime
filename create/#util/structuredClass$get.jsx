/*
if this is confusing, then hopefully, spiceTime should help for all code past this bootstrap.
This is example of how not to write code
 */
export default ({
    external:{_,t}
})=>({
    extendMe,assignDescriptors
})=>{
    class nameHandle$class {
        constructor(fullName){
            const [firstName,spiceName='val']=fullName.split(/$|#/g);
            Object.assign(this,{firstName,fullName, spiceName,
                me:this
            })
        }
    };
    const installChildren=({selfishChildren,top,parent$get})=>{
        const {
            me:parent,
            supr:suprParent=()=>{}
        }=extendMe(parent$get());
        return Object.defineProperties(extendMe(parent),_.mapObject(selfishChildren,
            (selfishChild,childFullName)=>{
                const {
                    firstName:childFirstName,
                    spiceName:childSpiceName,
                    me:childNameHandle
                }=nameHandle$class(childFullName);
                const isGet=childSpiceName.startsWith('get');
                const child=extendMe(
                    isGet?
                        (...args)=>selfishChild(top,selfSense)(...args):
                        ()=>{
                            const value=selfishChild(top,selfSense);
                            Object.defineProperty(parent,childFirstName,{value})
                            return value
                        },
                    {supr:suprParent[childFirstName]}
                );
                const child$get=extendMe(
                    ({
                        func:selfishChild=({},{self})=>_.values(self),
                        statik:selfishGrandChildren
                    })=>installChildren({top,
                        selfishChildren:{...selfishGrandChildren,
                            parent:()=>child
                        },
                        parent$get:()=>selfishChild(top,{
                            parent:child,
                            self:parent[childFirstName]
                        })
                    }),
                    {
                        extend:({func,statik})=>child$get({func,
                            statik:{...child.supr,...statik}
                        })
                    }
                )
                const selfSense=extendMe({parent,
                    self$get:child$get,
                    nameHandle:childNameHandle,
                })
                const childSpec={get:()=>isGet?child:child()}
                Object.defineProperty(selfSense,'self',childSpec)
                return childSpec
            }
        ))
    };
    class baseClass {
        assign(props){return Object.assign(this,props)};
        static instance$get(props){return new this(props)}
    };
    const structuredClass$get=({
        extendeeClass=baseClass,
        constructor:selfishConstructor=()=>()=>{},
        proto:selfishProtos,
        statik:selfishStatiks
    })=>{
        class StructuredIfNotCultured extends extendeeClass {
            constructor(props){
                super();
                this.assign({supr:extendeeClass.constructor.prototype});
                installChildren({
                    selfishChildren:selfishProtos,
                    top:this,
                    parent$get:()=>prototype
                });
                selfishConstructor(this)(props)
            }
        };
        assignDescriptors(StructuredIfNotCultured,extendeeClass);
        return installMethods({
            selfishChildren:{...selfishStatiks,
                supr:()=>extendeeClass,
                extend$getClass:(extendeeClass)=>({constructor,proto,statik})=>structuredClass$get({
                    costructor,proto,statik,extendeeClass
                })
            },
            parent$get:()=>StructuredIfNotCultured,
            top:StructuredIfNotCultured
        })
    };
    return Object.assign(structuredClass$get,nameHandle$class)
}
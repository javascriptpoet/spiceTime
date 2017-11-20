export  default  ()=>()=>(
    {
        me:pNode,
        path:pPath,
        nodeSpec:{nameHandle:{
            shortName:pShortName,
            fullName:pFullName
        }},
        constructor:{
            nameHandle$class:{shortName$getStr,
                me:nameHandle$class
            },
            instance$get:node$get
        }
    },
    {self:{
        supr:updateNodeSpecs
    }}
)=>({nodeSpecs,fullName,nodeSpec})=>{
    const childFullName=pShortName?fullName:fullName+pFullName
    const  {shortName,
        fullName:composedFullName,
        me:nameHandle
    }=new nameHandle$class(
        pShortName?fullName:fullName+pFullName
    );
    if(!shortName$getStr({fullName})){
        const {childNodes$getObj:{
            filteredNodes$getObj:childFilteredNodes$getObj,
            me:childNode
        }}=node$get({pNode,
            nodeSpec:{...nodeSpec,nameHandle},
            path:pPath+'/'+fullName
        });
    }
}
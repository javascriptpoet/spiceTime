export  default ({
    util:{extendMe}
})=>()=>({path,
    pNode:{dollar$obj_funcs:pDollar$obj},
    nodeSpec:{nameHandle}
})=>()=>extendMe({path,nameHandle,
    p$:!!pDollar$obj && pDollar$obj.buildtime$getDollar()
})
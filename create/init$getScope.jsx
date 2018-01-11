export default ({
    externals:{_,t,
        me:externals
    },
    utils:{extendMe,descriptors$process,typeofSwitch,
        me:utils
    }
})=>()=>{
    const init$getScope=({scope$seed,scopeName,descriptor$getObj})=>{
        const baseDollar$set=({
            me:spaceTime,
            $:p$={}
        })=>{
            const spaceTimeOperators$set=({$,me:spaceTime})=>{
                const expand$spice=({expander,expandee={}})=>Object.assign(expandee,typeofSwitch({
                    object:(props)=>props,
                    function:(props$get)=>props$get(spaceTime)
                })(expander))
                const spaceTimeOperators={
                    descriptors:()=>descriptors$process().of(spaceTime).filter({
                        all:({$,...descriptors})=>descriptors
                    }),
                    expand:(expander={})=>expand$spice({expander,
                        expandee:spaceTime
                    }),
                    evolve:(expander={})=>{
                        const {
                            me:evolvedSpaceTime,
                            $:unevolved$={}
                        }=expand$spice({expander,
                            expandee:Object.create(spaceTime)
                        })
                        spaceTimeOperators$set(Object.assign(evolvedSpaceTime,{
                            $:Object.create(unevolved$)
                        })).$.evolutions$set(unevolved$.evolutions)
                    },
                    supr$expand:(expander)=>{$.supr=expand$spice({expander,
                        expandee:$.supr
                    })},
                    scratch$expand:(expander)=>{$.scratch=expand$spice({expander,
                        expandee:$.scratch
                    })},
                    evolutions$set:(evolutions)=>Object.assign($.evolutions || {},typeofSwitch({
                        string:(name)=>({[name]:spaceTime}),
                        object:(evolutions)=>evolutions
                    })(evolutions)),
                    populate:(localInfo={})=>populate({localInfo,spaceTime})
                }
                Object.defineProperties(spaceTimeOperators,{
                    locals:{
                        get:()=>extendMe(
                            descriptors().mount(
                                (filterProps)=>descriptors().filter(filterProps).mount({})
                            )
                        )
                    }
                })
                descriptors$process().of(spaceTimeOperators).mount($)
            }
            spaceTimeOperators$set(
                Object.assign(spaceTime,{
                    $:extendMe(_objectCreate(p$,{p$,
                        evoutions:{},
                        scratch:{}
                    }))
                })
            ).$.evolutions$set('unevolved')
            delete p$.scratch
        }
        const populate=({
            flavorName='space',
            localInfo:{nameHandle,
                descriptor$getObj:wrappedDescriptor$getObj,...wrappedSpace
            },
            spaceTime:{
                me:pSpaceTime,$:p$
            }
        })=>{
            const {descriptor$getObj}=wrappedDescriptor$getObj?pSpaceTime.$.populate({
                descriptor$getObj:wrappedDescriptor$getObj
            }):pSpaceTime
            return Object.defineProperties(pSpaceTime,_.mapObject(wrappedSpace,
                (wrappedChild, firstName)=> {
                    const {
                        me:childSpaceTime,
                        $:child$
                    }=baseDollar$set(
                        pSpaceTime.$.evolve()
                    )
                    Object.defineProperties(
                        Object.assign(child$,{nameHandle,pSpaceTime,firstName}),
                        {
                            self:{get:()=>pSpaceTime[firstName]},
                            parent:{get:()=>p$.self}
                        }
                    )
                    return {
                        ...descriptor$getObj({childSpaceTime,
                            childWrappedSpace:wrappedChild
                        }),
                        configurable:true
                    }
                }
            ))
        }
        return baseDollar$set(scope$seed)
    }
    return init$getScope
}

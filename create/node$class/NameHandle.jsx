export default ()=>({
    externals:{_,t},
    utils:{
        assert:utilAssert,
        types:{tUndefined,tEmptyObject}
    }
})=>class NameHandle {
    constructor({name=''}) {
        //console.log(moduleName);
        //const assert=(testFunc,msg)=>utilAssert(testFunc,{path,msg:`name=${name}: ${msg}`});
        _.bindAll(this,'hasToken');
        const [fullName,extension]=name.split('.')[0];
        const [firstName,...rest]=fullName.split('$');
        const [sysPart='{}',userPart='{}']=rest.join('$').split('|');
        const getTokens=(part)=>part.split('$').reduce(
            (tokens,strToken)=>{
                const {name,...rest}=strToken.split(':');
                return {...tokens,
                    [name]:JSON.parse((rest || '{}').join(':'))
                }
            },
            {}
        );
        const userTokens=getTokens(userPart);
        const tJsonProps=t.dict(t.Str,t.enums({
            Num:'number',
            Str:'string',
            Bool:'boolean',
            Dat:'date'
        }));
        sysTokenTypes={
            spice:tJsonProps,
            spices:tJsonProps,
            val:tEmptyObject,
            func:tEmptyObject,
            utils:tEmptyObject,
            externals:tEmptyObject,
            type:tJsonProps,
            types:tJsonProps
        };
        const getSpiceName=({sysTokens})=>{
            const [spiceName,unknownToken]=_.difference(_.keys(sysTokens),_.keys(sysTokenTypes));
            t.assert(!unknownToken,`unknown sys token ${unknownToken}`);
            return spiceName
        }
        const tSysPart=subtype(
            t.struct(sysTokenTypes,{strict:true}),
            (sysTokens)=>tJsonProps.is(
                sysTokens[getSpiceName(sysTokens)]
            )
        );
        const sysTokens=tSysPart(getTokens(sysPart));
        const userTokens=t.Object(getTokens(userPart));
        const {nameType,tokens:{utils,externals}}=Object.assign(this,{firstName,fullName,name,
            tokens:{
                ...sysTokens,
                user:userTokens
            },
            nameType:(()=>{
                if(firstName==='utils' || utils)return 'utils';
                if(firstName==='externals' || externals)return 'externals';
                return ['spice','spices','type','types'].find((tokenName)=>this[tokenName]) || 'el'
            })()
        });
        const processPropTypes=({of})=>{
            const jsonPropTypes=tJsonProps(sysTokens[of]);
            Object.assign(this,{
                flavor:tEmptyObject.is(jsonPropTypes)?'val':'func',
                propTypes:_.objectMap(jsonPropTypes,
                    (strType)=>t[strType]
                )
            })
        };
        switch(nameType){
            case 'el':
                const spiceName=getSpiceName({sysTokens});
                if(!spiceName)break;
                const spiceProps=sysTokens[spiceName];
                Object.assign(this,{
                    spice:{
                        name:spiceName,
                        getProps:(spiceTypeScope)=>{
                            const tSpiceProps=spiceTypeScope[spiceName];
                            return (tSpiceProps? t.struct(tSpiceProps):tUndefined)(spiceProps)

                        }
                    },
                    flavor:sysTokens['func']?'func':'val'
                })
                break;
            case 'spice':
                processPropTypes({of:'spice'})
                break;
            case 'type':
                processPropTypes({of:'type'})
                break;
            case 'spices':
                processPropTypes({of:'spice'})
                break;
            case 'types':
                processPropTypes({of:'types'})
                break;
        }
    }
}

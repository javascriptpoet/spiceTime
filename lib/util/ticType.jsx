export default ({externals})=>{
    const {t}=externals;
    const bindStatics=require('./bindStatics')({externals});
    const tType=t.Function;
    const tNamelessArgType=tType;
    const tNamedArgType=t.struct({
        name:t.String,
        type:tType
    });
    const tArgTypes=t.union([tNamelessArgType,tNamedArgType]);
    const tPropTypes=t.dict(t.String,tType);
    const tArgsToProps=t.func(t.list(t.Any),t.Object);
    const tUserTicType=t.refinement(
        t.struct({
            argTypes:t.maybe(tArgTypes),
            propTypes:t.maybe(tPropTypes)
        },{
            strict:true
        }),
        ({argTypes,propTypes})=>{!(!!argTypes && !!propTypes)}
    );
    return bindStatics({
        props:{
            user:tUserTicType
        }
    })({
        to:tUserTicType.extend({
            flavor:t.enums.of('val func')
        })
    })
}
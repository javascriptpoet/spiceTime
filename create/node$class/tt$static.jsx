export default ({externals})=>{
    const {t}=externals;
    const [ticType,typeofSwitch]=['ticType','typeofSwitch'].map((name=>require('./'+name))({externals}));
    const noop=()=>{};
    const tNames=t.list(t.String);
    const tScope=t.struct({});
    const tVal=t.Any;
    const scopeTypes={
        time:t.struct({
            val:t.maybe(tVal),
            back:t.maybe(t.Function)
        }),
        space:t.struct({
            args:t.list(t.Any),
            props:t.Object
        }),
        ticType:t.dict(t.String,ticType),
        commonTypes:t.struct({
            args:t.list(t.Any),
            props:t.Object
        }),


    };
    const tPast=t.struct({
        space:tSpaceScope,
        time:tTimeScope
    });
    const tPresent=tPast;
    const tZeroTimeST=t.declare('tZeroST');
    const tST=t.declare('tST');
    const tBack=t.func(tPresent);
    const tGetType=t.func(
        t.struct({
            types:tScope,
            spiceTypes:tScope,
            ticTypes:tScope,
            timeTypes:ut.elTypeScope
        }),
        ut.ticType
    );
    const tTic=t.func(tPast,tST);
    const tFullTac=t.struct({
        getType:t.maybe(tGetType),
        back:t.maybe(tBack),
        tic:t.maybe(tTic)
    },{defaults:{
        getType:()=>ut.elType({}),
        back:()=>{t.assert(false,'no way back')},
        tick:noop
    }});
    const tTac=t.union([tTic,tFullTac]);
    const tGetTypes=t.func()
    const tFullZeroTimeST=t.subtype(
        t.struct({
            moduleNames:t.maybe(tNames),
            space:t.dict(t.String,tST),
            future:t.maybe(tTac),
        },{defualts:{
            future:{},
            moduleNames:[],
            space:{},
            future:noop,
        }}),
        ({future,moduleNames,...timeBranches})=>{
            t.dict(t.String,tZeroTimeST).is(timeBranches)
        }
    );
    const tFullST=tFullZeroTimeST.extend({
        getVal:t.maybe(t.func(tPresent,t.Any))
    },{defaults:{
        getVal:()=>undefined
    }});
    tST.define(t.union([tTac,tFullST,tVal]));
    tZeroTimeST.define(t.union([tTac,tFullZeroTimeST]));
    return {noop,
        getType:tGetType,
        tic:tTic,
        time:tTime,
        fullTac:tFullTac,
        tac:tTac,
        fullST:tFullST,
        sT:tST,
        zeroTimeST:tZeroTimeST
    }
}
export default ({externals})=>{
    const [tt,getTransform,typeofSwitch]=['tt','getTransform','typeofSwitch'].map((name=>require('./'+name))({externals}));
    const nTac=(val)=>tt.tac(getTransform([
        {
            fromT:tt.fullTac,
            toVal:(fullTac)=>fullTac
        },
        {
            fromT:tt.tic,
            toVal:(tic)=>({tic})
        }
    ])(tt.tac(val)));
    const nST=(val)=>tt.sT(getTransform([
        {
            fromT:tt.tac,
            toVal:(tac)=>({future:n.tac(tac)})
        },
        {
            fromT:tt.fullST,
            toVal:(fullST)=>fullST
        },
        {
            toVal:(val)=>{val}
        }
    ])(tt.sT(val)));
    const nElType=({argTypes,propTypes})=>{
        if(argTypes){
            return argTypes.reduce(
                ({argTypes,propTypes,argsToProps},argType,argIndex)=>typeofSwitch({
                    function:(namelessArgType)=>({propTypes,
                        argsToProps:(args)=>{
                            argType.is(args[argIndex]);
                            return argsToProps(args)
                        },
                        argTypes:argTypes.push(namelessArgType),
                    }),
                    object:({name:argName,type:argType})=>({
                        argTypes:argTypes.push(argType),
                        propTypes:Object.assign(propTypes,{
                            [argName]:argType
                        }),
                        argsToProps:(args)=>Object.assign(argsToProps(args),{
                            [argName]:argType(args[argIndex])
                        })
                    })
                }),
                {
                    argTypes:[],
                    propTypes:{},
                    argsToProps:()=>({})
                }
            )
        }
    };
    return {
        tac:nTac,
        sT:nST,
        elType:nElType
    }
}
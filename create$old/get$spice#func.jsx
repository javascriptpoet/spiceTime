export default ()=>({func$spice})=>({...func$spice,
    noun:({hostSpaceTime:{
        $:{expand},
        time:{tic}}
    })=>(...args)=>tic(expand({args}))
})
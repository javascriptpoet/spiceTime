import noun from './noun#get'

export default ()=>({get$spice,$:{populate}})=>({...get$spice,
    noun:populate({noun}).noun
})











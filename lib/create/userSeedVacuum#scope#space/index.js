import flavors from './flavors#childScope'
import dollar$class from './dollar$class#space'

export default ({
    me:pastVacuum,
    utils:{unwrap$get}
})=>{
    const {flavors,dollar$class}=unwrap$get(pastVacuum.$.evolve())({dollar$class,flavors})
    return (pastSpace)=>{
        const {me:space, dollar$class}=pastSpace.$.evolve().$.populate({dollar$class})
        return space.$.assign({
            userSeedVacuum:(new dollar$class).addChildScope('flavors',flavors(space))
        }).userSeedVacuum
    }
}

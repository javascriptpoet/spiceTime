import vacuumDollar$class from './vacuumDollar$class'
import spaceDollar$class from './spaceDollar#vacuumDollar$class'

export default ({unvacuum,operators,
    utils:{extendMe}
})=>{
    const {vacuumDollar$class,spaceDollar$class}=unvacuum({vacuumDollar$class,spaceDollar$class})
    const evolve$operator=({
        me:pHostVacuum,
        $:pHostVacuumDollar=new vacuumDollar$class({
            container:pHostVacuum
        })
    })=>{
        const hostVacuum = pHostVacuumDollar.evolve()
        const space$evolve=({
            me:pHostSpace,
            $:pHostSpaceDollar = new spaceDollar$class({
                container: pHostSpace
            })
        })=>{
            const hostSpace=pHostSpaceDollar.evolve()
            hostSpace.$.vacuum = hostVacuum
            return hostSpace
        }
        return Object.assign(extendMe(space$evolve),{vacuum:hostVacuum})
    }
    return Object.assign(operators,{
        evolve:evolve$operator
    }).evolve
}
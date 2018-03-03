import './userSeedVacuum'
import vacuum from './vacuum#obj'

const  node$klass=require('./node$klass')(vacuum)
const create=require('./create')(vacuum)({node$class})
const userSeedVacuum=create({require,vacuum,
    name:'userVacuum'
})
export default ({require,name,space})=>create({require,name,space,
    vacuum:userSeedVacuum
})


import utils from './utils#vacuumProp'
import baseTypes from './baseTypes#vacuumProp'


export default ({dollar$class,
    me:vacuum,
    buildFlavors=dollar$class.monetize({container:{}}),
    $:{populate}
})=>buildFlavors.$.populate({utils,util,baseTypes,baseType})


import baseTypes from './#baseTypes'
import types from './#types'
import buildFlavors from './#buildFlavors'
import utils from './#utils'

export default ({unvacuum,
    me:vacuum,
    externals:{_},
    utils:{dollar$getClass,
        me:utils
    }
})=>{
    dollar$class=dollar$getClass()
    vacuum.dollar$class=dollar$class
    dollar$class.monetize({container:vacuum})
    dollar$class.monetize({container:utils})
    unvacuum(buildFlavors)
    unvacuum({types,baseTypes,utils})
}
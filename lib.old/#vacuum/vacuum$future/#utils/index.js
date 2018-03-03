import assert from './assert'
import getTransform from 'getTransform'
import getStructuredClass from './getLocals'
import assignDescriptors from './assignDescriptors'
import mountLocals from './mountLocals'
import commonSwitch from './commonSwitch#getSwitch'

export default ({utils:{unvacuum}})=>Object.assign(vacuum,{
    utils:{...vacuum.utils || {},...unvacuum({
        assert,getTransform,assignDescriptors,commonSwitch
    })}
})







import assert from './assert'
import getTransform from 'getTransform'
import getStructuredClass from './getLocals'
import assignDescriptors from './assignDescriptors'
import mountLocals from './mountLocals'
import commonSwitch from './commonSwitch#getSwitch'

export default ({unvacuum,utils})=>Object.assign(utils,unvacuum({
    assert,getTransform,descriptor$process
}))








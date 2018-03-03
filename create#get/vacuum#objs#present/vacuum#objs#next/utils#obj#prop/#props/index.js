import assert from './assert'
import getTransform from 'getTransform'
import getStructuredClass from './getLocals'
import assignDescriptors from './assignDescriptors'
import mountLocals from './mountLocals'
import base$class from './base$class'
import commonSwitch from './commonSwitch#getSwitch'

export default ({utils:{unwrap}})=>unwrap({
    assert,getTransform,assignDescriptors,base$class,commonSwitch
})












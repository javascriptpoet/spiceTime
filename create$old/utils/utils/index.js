import assert from './assert'
import getTransform from 'getTransform'
import typeofSwitch from 'typeofSwitch'
import getStructuredClass from './getLocals'
import assignDescriptors from './assignDescriptors'
import extendMe from './extendMe'
import mountLocals from './mountLocals'
import base$class from './base$class'
import commonSwitch from './commonSwitch#getSwitch'

export default ()=>({unwrap})=>unwrap({
    assert,getTransform,typeofSwitch,assignDescriptors,extendMe,base$class,commonSwitch
})












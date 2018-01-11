import assert from './assert'
import getTransform from 'getTransform'
import typeofSwitch from 'typeofSwitch'
import getStructuredClass from './getLocals'
import assignDescriptors from './assignDescriptors'
import extendMe from './extendMe'
import mountLocals from './mountLocals'

export default ({externals})=>{
    const {_}=extendMe({externals})(externals)
    return _.mapObject(
        {assert,getTransform,typeofSwitch,assignDescriptors,extendMe},
        (util)=>util({externals})
    )
}











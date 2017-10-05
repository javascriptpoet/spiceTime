import assert from './assert';
import getTransform from 'getTransform';
import typeofSwitch from 'typeofSwitch';
import getStructuredClass from './getLocals';
import extendMe from 'extendMe';

export default ({external:{_,
    $me:external
}})=>_mapObject(
    {assert,getTransform,typeofSwitch,getStructuredClass,extendMe},
    (unwrapped)=>unwrapped({external})
)







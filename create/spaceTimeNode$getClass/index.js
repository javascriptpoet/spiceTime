import constructor from './constructor';
import invoke from './invoke$get';
import addChildInfo$getObj from './addChildInfo$getObj';
import childInfos$getObj from './childInfos$getObj';
import childNode$getObj from './childNode$getObj';
import childNodes$getObj from './childNodes$getObj';
import housedNodeSpec$getObj from './housedNodeSpec$getObj';
import buildtimeProps$getObj from './buildtimeProps$getObj';
import runtimeProps$getObj from './buildtimeProps$getObj';
import scope$getObj from './scope$getObj';
import timeScope$getDecoratedArr from './timeScope$getDecoratedArr';
import pickChildInfos$getObj from './pickChildInfos$getObj';
import firstName$getStr from './firstName$getStr';
import statics from './#statics';

export default ({
    util:{structured$getClass},
    me:wrapperProps
})=>()=>({appTopRequire})=>structured$getClass({wrapperProps,constructor,
    methods:{statics,
        protos:{
            invoke,nameHandle$class,addChildInfo$getObj,childInfos$getObj,childNode$getObj,childNodes$getObj,housedNodeSpec$getObj,
       }
    }
})({appTopRequire})
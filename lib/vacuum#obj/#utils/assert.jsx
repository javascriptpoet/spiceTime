export default ({externals:{t}})=>(testFunc,msg,{path})=>t.assert(testFunc(),`path=${path}: ${msg}`)

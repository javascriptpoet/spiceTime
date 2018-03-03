import tcombType from './tcombType#prop'

export default ({
    externals:{t,unwrap}
})=>t.func(t.Any,unwrap(tcombType))
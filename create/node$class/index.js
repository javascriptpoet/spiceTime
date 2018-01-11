import constructor from './constructor'
import methods from './methods'
import statikMethods from './statikMethods'
import descriptor$getObj from './descriptor$getObj'

export default ()=>({class$spice,$:{evolve}})=>class$spice(
    evolve({
        wrappedLocals:{constructor,methods,statikMethods,descriptor$getObj}
    })
)

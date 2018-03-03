import constructor from './constructor';
import methods from './methods';
import statikMethods from './statikMethods';

export default ()=>({class$spice,$:{evolve}})=>class$spice(evolve({wrappedLocals:{
    constructor,methods,statikMethods
}}))

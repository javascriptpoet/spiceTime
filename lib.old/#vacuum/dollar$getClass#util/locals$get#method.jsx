export default ()=>function(
    filter=()=>true
){
    return _.reduce(this.container,(locals,prop,name)=>(
        filter({name,
            self$wrapped:prop
        })?{...locals,
            [name]:prop
        }:locals
    ),{})
}
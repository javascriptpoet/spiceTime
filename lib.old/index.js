import vacuum from './vacuum#obj'
import node$klass from './node$klass'
import create from './create#present'

export default create(vacuum)({
    node$klass:node$klass(vacuum)
})

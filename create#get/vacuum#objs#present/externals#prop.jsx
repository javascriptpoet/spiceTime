const t=require('tcomb-form')
const _=require('meteor/underscore')._
export default {t,_,
    React: require('react'),
    reactRedux: require('react-redux'),
    redux: require('redux'),
    reduxThunk: require('redux-thunk'),
    ReactRouterSSR: require('meteor/rubix:reactrouter:react-router-ssr').ReactRouterSSR,
    reactRouter: require('react-router'),
    rubix: require('@sketchpixy/rubix'),
    ReactDOM: require('react-dom'),
    classNames: require('classnames'),
    reactRouter: require('react-router'),
    l20n: require('@sketchpixy/rubix/lib/L20n'),
    Immutable: require('immutable'),
    reactAddonsTestUtils: require('react-addons-test-utils'),
    stdAccounts: require('meteor/jspoet:accounts-bootstrap'),
    reduxImmutable: require('redux-immutable'),
    meteor: {
    validatedMethod: require('meteor/mdg:validated-method'),
        mongo: require('meteor/mongo'),
        meteor: require('meteor/meteor'),
},
    deepGetSet: require('deep-get-set')
}
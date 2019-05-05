// var redux = require('redux');

// var store = redux.createStore(reducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// export default store;
import reducer from './reducers';

var redux = require('redux');
var store = redux.createStore(reducer);
export default store;

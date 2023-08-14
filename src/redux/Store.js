import { createStore,applyMiddleware } from 'redux';
import reducer from './reducers/Reducer'; // Import your reducer
import thunk from 'redux-thunk';
const store = createStore(reducer,applyMiddleware(thunk));

export default store;
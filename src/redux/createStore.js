import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
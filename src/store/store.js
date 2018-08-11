import {createStore, combineReducers, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import login from './login/reducer';

const rootReducer = combineReducers({
	auth: login,
});

const store = createStore(
  	rootReducer,
	applyMiddleware(thunk)
);

const persistor = persistStore(store);

export { store, persistor };
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';
import * as login from './action';

const persistConfig = {
	key: 'loginData',
	storage: localStorage,
	blacklist: ['error']
};

let initialState = {
	user: null,
	isAuthenticated: false,
	error: null
};

const loginData = (state = initialState, action = {}) => {
	switch(action.type) {
		default:
			return state;
	}
};

export default persistReducer(persistConfig, loginData);
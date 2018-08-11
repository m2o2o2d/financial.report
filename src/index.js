import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store/store';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import '@/style/base.css';

import App from '@/views/App/App';

const render = Component => {
	ReactDOM.render(
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppContainer>
					<Router>
						<Switch>
							<Route path="/app" component={App} />
							<Redirect to="/app" />
						</Switch>
					</Router>
				</AppContainer>
			</PersistGate>
		</Provider>,
		document.getElementById('root')
	);
};

render();

// Webpack Hot Module Replacement(HMR) API
if(module.hot) {
	module.hot.accept();
}

registerServiceWorker();

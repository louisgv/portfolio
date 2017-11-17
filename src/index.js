import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from 'registerServiceWorker';

import TransitionGroup from 'react-transition-group/TransitionGroup';

import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

import AnimatedSwitch from 'components/AnimatedSwitch';

import Home from 'pages/Home';

import './index.css';

const {location} = window;

const basenameMap = {
	'': '/'
	'people.rit.edu' : '/hhn2884/portfolio',
	'louisgv.github.io' : '/portfolio'
}

const basename = basenameMap[location.host]

// Global page, so it also include some section
const App = () => (
	<Router basename={basename}>
		<TransitionGroup>
			<AnimatedSwitch>
				<Route exact path="/" component={Home} />
			</AnimatedSwitch>
		</TransitionGroup>
	</Router>
);

const rootEl = document.getElementById('root');

if (rootEl) {
	ReactDOM.render(<App />, rootEl);
	registerServiceWorker();
}

export default App;

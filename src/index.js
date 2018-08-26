// eslint-disable-next-line
import React from 'react';
import App from './js/components/App';
import ReactDOM from 'react-dom';


const wrapper = document.getElementById('chore-chart-app');

wrapper
	? ReactDOM.render(<App />, wrapper)
	: false;

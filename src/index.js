import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';

// zadanie 28.3
//import DevTools from './DevTools';
//import { getCountries } from './actions/actions-countries';

render(
   <Provider store={store}>
      <Router history={hashHistory} routes={routes} />
   </Provider>,
   document.getElementById('root')
);

// zadanie 28.3
//store.dispatch(getCountries());

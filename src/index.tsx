import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom'

import Hello from "./components/hello";
import { SampleRoute } from "./components/sample-route";
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route exact path="/sampleRoute" component={SampleRoute} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.querySelector('#example')
);

// React imports
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./style/index.scss";

// Redux imports
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

// Router imports
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import { history } from "./store";

// Pages imports
import Home from "./pages/Home/index";
import Page1 from "./pages/Page1/index";
import Page2 from "./pages/Page2/index";
import Page3 from "./pages/Page3/index";
import Page4 from "./pages/Page4/index";
import Page5 from "./pages/Page5/index";
import Page6 from "./pages/Page6/index";
import Page7 from "./pages/Page7/index";
import Page8 from "./pages/Page8/index";
import Page9 from "./pages/Page9/index";

// Material-UI imports
import Paperbase from "./theme/Paperbase";

function App() {
  return (
    <Fragment>
      <Router history={history}>
        <Switch>
          <Paperbase />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/authentication" component={Page1}></Route>
          <Route exact path="/database" component={Page2}></Route>
          <Route exact path="/storage" component={Page3}></Route>
          <Route exact path="/hosting" component={Page4}></Route>
          <Route exact path="/functions" component={Page5}></Route>
          <Route exact path="/ml_kit" component={Page6}></Route>
          <Route exact path="/analytics" component={Page7}></Route>
          <Route exact path="/performance" component={Page8}></Route>
          <Route exact path="/test_lab" component={Page9}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import Splash from "./compontents/Splash";
import Header from "./compontents/Header";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <React.Fragment>
      {/* <Splash marginTop={20} logoWidth={125} /> */}
      <HashRouter basename="/">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import Splash from "./compontents/Splash";
import Header from "./compontents/Header";
import Footer from "./compontents/Footer";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <React.Fragment>
      {process.env.REACT_APP_SHOW_SPLASH === "true" && (
        <Splash marginTop={20} logoWidth={125} />
      )}
      <HashRouter basename="/">
        <Header />
        <div style={{ padding: "0px 20px 40px" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </HashRouter>
    </React.Fragment>
  );
}

export default App;

import React, { Suspense } from "react";
import Splash from "./compontents/Splash";
import Header from "./compontents/Header";
import Footer from "./compontents/Footer";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home, About, Contact, Portfolio, NotFound } from "./pages";

function App() {
  return (
    <Suspense fallback={<div></div>}>
      <React.Fragment>
        {process.env.REACT_APP_SHOW_SPLASH === "true" && (
          <Splash marginTop={20} logoWidth={125} />
        )}
        <HashRouter basename="/">
          <Header />
          <div style={{ padding: "10px 20px 30px" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route path="/not-found" component={NotFound} />
              <Route>
                <Redirect to="/not-found" />
              </Route>
            </Switch>
          </div>
          <Footer />
        </HashRouter>
      </React.Fragment>
    </Suspense>
  );
}

export default App;

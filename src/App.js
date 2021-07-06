import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Nav from "./components/nav";
import Projects from "./components/projects";
import Contact from "./components/contact";
import About from "./components/about";
import HomeCarousel from "./components/carousel";

function App() {
  return (
    <div className="App">
      <Nav />

      <div className="content-container">
        <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/carousel">
            <HomeCarousel />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
        <br />
      </div>
    </div>
  );
}

export default App;

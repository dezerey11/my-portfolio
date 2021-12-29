import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/nav";
import Projects from "./components/projects";
import Contact from "./components/contact";
import About from "./components/about";
import Footer from "./components/footer";
import Skills from "./components/skills";
import HomeCarousel from "./components/carousel";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="content-container">
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
          <Route exact path="/skills">
            <Skills />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;

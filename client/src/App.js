import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./Bootswatch.css";
import "./resume.css";
//import "./resume.min.css";
import "./App.css";
import { Container, Footer } from "./components";

const App = () => (
  <Router>
<div className="mainContainer">
      <Nav />
    <Container>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
    </Container>
  <Footer />
  </div>
  </Router>

);

export default App;

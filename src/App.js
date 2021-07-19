import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import { GlobalStyle } from "./globalStyles";
import About from './components/About';

function App() {
  return (
    <Router>
       <GlobalStyle />
       <Hero />
       <About />
    </Router>
  );
}

export default App;

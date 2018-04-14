import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import MessageBoard from "./pages/MessageBoard";

const App = () => (
  <Router>
    <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/aoklist" component={MessageBoard} />
    </div>
  </Router>
);

export default App;

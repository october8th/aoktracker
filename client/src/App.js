import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import MessageBoard from "./pages/MessageBoard";
import Map from "./pages/Map";
import SuggestedAOK from "./pages/SuggestedAOK";

const App = () => (
  <Router>
    <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/aoklist" component={MessageBoard} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/suggestedaok" component={SuggestedAOK} />
    </div>
  </Router>
);

export default App;

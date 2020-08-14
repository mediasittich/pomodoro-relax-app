import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import PomodoroApp from "./containers/Pomodoro.js";
import RelaxApp from "./containers/Relax.js";
import MeditateApp from "./containers/Meditate.js";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pomodoro" component={PomodoroApp} />
            <Route path="/relax" component={RelaxApp} />
            <Route path="/meditate" component={MeditateApp} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

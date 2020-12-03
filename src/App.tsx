import React from "react";
import "./App.css";

import LaunchListContainer from "./Components/Launch";
import LaunchDetail from "./Components/LaunchDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <div className="componentDiv">
            <LaunchListContainer />
            <LaunchDetail />
          </div>
        </Route>
      </Router>
    </div>
  );
};

export default App;

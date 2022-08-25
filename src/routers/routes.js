import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// importing all the themes
import Home from "../themes/home";
import Farming from "../themes/farming";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* <Route exact path="/">
              <Redirect to="/home" />
            </Route> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/farming" component={Farming} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;

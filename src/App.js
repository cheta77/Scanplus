import Header from "./components/Header";

import Home from "./Routes/Home";
import SignUp from "./Routes/SignUp";
import Login from "./Routes/Login";
import Patients from "./Routes/Patients";
import Dashboard from "./Routes/Dashboard";
import Example from "./Routes/Example";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Consultants from "./Routes/Consultants";
import Profile from "./Routes/Profile";
import SignupCon from "./components/SignupCon";
import Report from "./Routes/Report";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/SignUp" component={SignUp} />
                    <Route exact path="/Dashboard" component={Dashboard} />
                    <Route exact path="/Example" component={Example} />
                    <Route exact path="/Consultants" component={Consultants} />
                    <Route exact path="/Patients" component={Patients} />
                    <Route exact path="/Profile" component={Profile} />
                    <Route exact path="/SignupCon" component={SignupCon} />
                    <Route exact path="/Report" component={Report} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

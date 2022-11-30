import Header from "./components/Header";

import Home from "./Routes/Home";
import SignUp from "./Authentication/SignUp";
import Login from "./Authentication/Login";
import Patients from "./Routes/Patients";
import Dashboard from "./Routes/Dashboard";
import Example from "./Routes/Example";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Consultants from "./Routes/Consultants";
import Profile from "./Routes/Profile";
import Report from "./Routes/Report";
import Add from "./Client/Add";
import ClientSignup from "./Authentication/ClientSignup";
import Radiographer from "./Routes/Radiographer";
import ConDashboard from "./Consultant/ConDashboard";
import ClientDashboard from "./Client/ClientDashboard";

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
                    <Route exact path="/Add" component={Add} />
                    <Route exact path="/Report" component={Report} />
                    <Route
                        exact
                        path="/ConDashboard"
                        component={ConDashboard}
                    />
                    <Route
                        exact
                        path="/ClientDashboard"
                        component={ClientDashboard}
                    />
                    <Route
                        exact
                        path="/Radiographer"
                        component={Radiographer}
                    />
                    <Route
                        exact
                        path="/ClientSignup"
                        component={ClientSignup}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

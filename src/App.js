import Header from './components/Header';

import Home from './Routes/Home';
import SignUp from './Routes/SignUp';
import Login from './Routes/Login';
import Patients from './Routes/Patients';
import Dashboard from './Routes/Dashboard';
import Example from './Routes/Example';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Consultants from './Routes/Consultants';
import Profile from './Routes/Profile';
import Report from './Routes/Reports';
import RadioHome from './Routes/Radiographer/Home';
import RadioDashboard from './Routes/Radiographer/Dashboard';
import ConHome from './Routes/Consultant/Home';
import ConDashboard from './Routes/Consultant/Dashboard';
import Consult from './Routes/Consultant/Consultants';


function App() {


	const AuthStack = () => (
		<Router>
			<Switch>
				<Route exact path name="signUp" component={SignUp} />
				<Route exact path="Login" component={Login} />
			</Switch>
		</Router>
	);

	const AdminStack = () => (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/Dashboard' component={Dashboard} />
				<Route exact path='/Example' component={Example} />
				<Route exact path='/Consultants' component={Consultants} />
				<Route exact path='/Patients' component={Patients} />
				<Route exact path='/Profile' component={Profile} />
				<Route exact path='/Report' component={Report} />
			</Switch>
		</Router>
	);

	const RadiographerStack = () => (
		<Router>
			<Switch>
				<Route exact path='/' component={RadioHome} />
				<Route exact path='/Dashboard' component={RadioDashboard} />
			</Switch>
		</Router>
	);

	const ConsultantStack = () => (
		<Router>
			<Switch>
				<Route exact path='/' component={ConHome} />
				<Route exact path='/ConDashboard' component={ConDashboard} />
				<Route exact path='/Consultant' component={Consult} />
			</Switch>
		</Router>
	);

	return (
		<div>
			<Router>
				<Switch>
					<AuthStack />
					{/* <AdminStack /> */}
					{/* <RadiographerStack /> */}
					{/* <ConsultantStack /> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;

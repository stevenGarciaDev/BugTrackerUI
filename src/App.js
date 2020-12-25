import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import CreateProject from './pages/create-project';
import CreateTicket from './pages/create-ticket';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import ManageRoles from './pages/manage-roles';
import Projects from './pages/projects';
import Register from './pages/register';
import ResetPassword from './pages/reset-password';
import Tickets from './pages/tickets';
import UserProfile from './pages/user-profile';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/project/create" component={CreateProject} />
        <Route path="/ticket/create" component={CreateTicket} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/resetPassword" component={ResetPassword} />
        <Route path="/tickets" component={Tickets} />
        <Route path="/projects" component={Projects} />
        <Route path="/manageRoles" component={ManageRoles} />
        <Route path="/userProfile" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;

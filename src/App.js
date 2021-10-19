import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/about">
                <AboutUs></AboutUs>
              </Route>
              <Route path="/contact">
                <ContactUs></ContactUs>
              </Route>
              <PrivateRoute path="/details/:serviceId">
                <ServiceDetails></ServiceDetails>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/signup">
                <SignUp></SignUp>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;

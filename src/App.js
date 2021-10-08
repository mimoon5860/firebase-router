import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Error from './Components/Error/Error';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <Router>
        <header className="App">
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='/forgotpassword'>
              <ForgotPassword></ForgotPassword>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
        </header>
        <Footer></Footer>
      </Router>
    </div >
  );
}

export default App;

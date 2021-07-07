// import './App.css';
// import { useState } from 'react';
// import Mysurvey from './components/surveyTypes/surveyTypeOne';
// import SignIn from './components/home/SignIn';

// function App() {

//   const adminUser = {
//     email: "admin@gmail.com",
//     password: "PassWord@147"
//   }

//   const [user, setUser] = useState({name:"", email:""});
//   const [error, setError] = useState("");
  
//   const Login = details => {
//     console.log(details);
//   }

//   const Logout = () => {
//     console.log("Logout");
//   }

//   return (
//     <div className="App">
//       {(user.email != "") ? (
//         <div className = "welcome">
//           <h2>Welcome.. <span>{user.name}</span></h2>
//           <button>Logout</button>
//         </div>
//       ) : <SignIn Login = {Login} error = {error}/>}


//       {/* <Mysurvey /> */}
      
//     </div>
//   );
// }

// export default App;



import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mysurvey from './components/surveyTypes/surveyTypeOne';
import Admin from './components/home/Admin';

import Login from "./components/login.component";

function App() {
  return (<Router>
    <div className="App">
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/create-survey" component={Mysurvey} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;


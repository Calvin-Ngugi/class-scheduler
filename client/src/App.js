import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/signUp";
import Login from "./Components/login";
import Home from "./Components/Home";


const App = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <main>
      {user ?(
        <Switch>
          <Route exact path="/">
            <Home 
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
            />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/signup">
            <SignUp 
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
            />
          </Route>
          <Route path="/login">
            <Login 
            setIsLoggedIn={setIsLoggedIn}
            setUser={setUser} 
            />
          </Route>
        </Switch>
      )
    }
    </main>
  )
}

export default App
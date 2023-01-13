import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/signUp";
import Login from "./Components/login";
import Home from "./Components/Home";


const App = () => {
  const [user, setUser] = useState(null);

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
            user={user}
            />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/signup">
            <SignUp 
            setUser={setUser}
            />
          </Route>
          <Route path="/login">
            <Login 
            setUser={setUser} 
            />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      )
    }
    </main>
  )
}

export default App
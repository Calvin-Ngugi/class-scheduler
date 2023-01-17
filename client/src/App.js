import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import SignUp from "./Pages/signUp";
import Login from "./Pages/login";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import SingleCourse from "./Components/Course/SingleCourse";
import Session from "./Components/Session/Session";
import AllSessions from "./Components/AllSessions";


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
      <Navbar setUser={setUser} user={user}/>
      {user ?(
        <Switch>
          <Route exact path="/">
            <Home 
            setUser={setUser}
            user={user}
            />
          </Route>
          <Route path="/courses/:id">
            <SingleCourse user={user}/>
          </Route>
          <Route exact path="/course_sessions">
            <AllSessions/>
          </Route>
          <Route path="/course_sessions/:id">
            <Session />
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
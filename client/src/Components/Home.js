import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Home = ({user, setUser}) => {
  const history = useHistory();

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    history.push("/login");
  }
  if(user){
    if (user.role === "instructor"){
  return (
    <div className="container">
      <h4>Show me what you got</h4>
      <button
        onClick={handleLogout}
        className="btn btn-outline-danger"
        style={{ width: "100px" }}
      >
        Logout
      </button>
    </div>
  );
    } else {
      return (
      <div className="container">
      <button
        onClick={handleLogout}
        className="btn btn-outline-danger"
        style={{ width: "100px" }}
      >
        Logout
      </button>
    </div>
    );
    }
  } else {
    return (
      <div className="container">
      <h1>Please Login or SignUp to continue...</h1>
      <Link to={`/login`} className="link" >
        Login
      </Link>
      </div>
    );
  }
}

export default Home;

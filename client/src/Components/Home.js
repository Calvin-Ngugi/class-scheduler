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
  return (
    <div>
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
      <>
      <h1>Please Login or SignUp to continue...</h1>
      <Link to={`/login`} className="link" >
        Login
      </Link>
      </>
    );
  }
}

export default Home;

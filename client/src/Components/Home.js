import React from "react";
import { Redirect, useHistory } from "react-router-dom";

const Home = ({setUser, setIsLoggedIn, isLoggedIn}) => {
  const history = useHistory();
  if (!isLoggedIn) return <Redirect to="/login" />;

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    setIsLoggedIn(false);
    history.push("/login");
  }
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
};

export default Home;

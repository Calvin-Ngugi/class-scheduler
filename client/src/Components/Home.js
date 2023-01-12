import React from 'react'
import { Redirect } from "react-router-dom";

const Home = ({isLoggedIn}) => {
  if (!isLoggedIn) return <Redirect to="/login" />
  return (
    <div>Home</div>
  )
}

export default Home
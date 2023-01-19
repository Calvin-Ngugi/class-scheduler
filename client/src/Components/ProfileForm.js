import React, { useState } from "react";
import "../Css/ProfileForm.css";

const ProfileForm = () => {
  const [formdata, setFormData] = useState({
    First_name: "",
    Last_name: "",
    gender: "",
    bio: ""
  });
  function handleChange(e) {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    // console.log(JSON.stringify(formdata))
    fetch("/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Application: "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error);
  }
  return (
    <div className="profilebackground">
      <div className="form">
        <h2>Create User Profile</h2>
        <div className="container">
          <form id="profile-form" onSubmit={handleSubmit}>
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formdata.First_name}
              onChange={handleChange}
            />
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formdata.Last_name}
              onChange={handleChange}
            />
            <label for="gender">Gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formdata.gender}
              onChange={handleChange}
            />
            <label for="bio">Biography</label>
            <input
              type="text"
              id="bio"
              name="bio"
              value={formdata.bio}
              onChange={handleChange}
            />
            <button id="btn" type="submit">
              Create User Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ProfileForm;

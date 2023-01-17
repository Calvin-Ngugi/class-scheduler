import React, { useState } from "react";

const ProfileForm = () => {
  const [formdata, setFormData] = useState({
    First_name: "",
    Last_name: "",
    gender: "",
    bio: "",
    profile_img: "",
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
    <div className="studentbackground">
      <div className="form">
        <h2>Create Profile</h2>
        <div className="container">
          <form id="profile-form" onSubmit={handleSubmit}>
            <label for="fname">First name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formdata.First_name}
              onChange={handleChange}
            />

            <label for="lname">Last name</label>
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

            <label for="profileimage">Profile Image</label>
            <input
              type="text"
              id="profileimage"
              name="email"
              value={formdata.profile_img}
              onChange={handleChange}
            />

            <button id="btn" type="submit">
              Create Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ProfileForm;

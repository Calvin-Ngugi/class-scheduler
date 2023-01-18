import React, { useState } from "react";
import "../Css/CourseForm.css";

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
    <div className="profile-content">
      <div className="profile">
        <h1>Create Profile </h1>
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="top-row">
            <div className="field-wrap">
              <label className="label">
                First Name<span className="req">*</span>
              </label>
              <input
                type="text"
                id="fname"
                value={formdata.First_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field-wrap">
            <label className="label">
              Last Name<span className="req">*</span>
            </label>
            <input
              type="text"
              id="lname"
              value={formdata.Last_name}
              onChange={handleChange}
            />
          </div>
          <div className="field-wrap">
            <label className="label">
              Gender<span className="req">*</span>
            </label>
            <input
              type="text"
              id="gender"
              value={formdata.gender}
              onChange={handleChange}
            />
          </div>
          <div className="field-wrap">
            <label className="label">
              Bio<span className="req">*</span>
            </label>
            <input
              type="text"
              id="bio"
              value={formdata.bio}
              onChange={handleChange}
            />
          </div>
          <div className="field-wrap">
            <label className="label">
              Bio<span className="req">*</span>
            </label>
            <input
              type="text"
              id="image"
              value={formdata.profile_img}
              onChange={handleChange}
            />
          </div>
          <div className="profile-btn">
            <button id="btn" type="submit">
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProfileForm;

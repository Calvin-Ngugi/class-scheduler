import React, { useState } from "react";
import "../Css/CourseForm.css";

function CourseForm() {
  const [course_name, setCourseName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    fetch("/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Application: "application/json",
      },
      body: JSON.stringify({
        course_name,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error);
  }

  return (
    <div className="course-content">
      <div className="course">
        <h1>Create Course </h1>
        <form className="course-form" onSubmit={handleSubmit}>
          <div className="top-row">
            <div className="field-wrap">
              <label className="label">
                Course Name<span className="req">*</span>
              </label>
              <input
                type="text"
                id="course_name"
                value={course_name}
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>
          </div>
          <div className="field-wrap">
            <label className="label">
             Description<span className="req">*</span>
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="course-btn">
            <button id="btn" type="submit">
              Register Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourseForm;

import { useState } from "react";

const initialState = {
  course_name: "",
  description: ""
};

function CourseForm({ onAddCourse }) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newCourse) => {
        setFormData(initialState);
        onAddCourse(newCourse);
      });
  }

  return (
    <div className="card">
      <h2>Course Detail</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="course_name">Course Name: </label>
        <input
          type="text"
          id="course_name"
          value={formData.course_name}
          onChange={handleChange}
        />
        <label htmlFor="description">Course Description: </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Register Course</button>
      </form>
    </div>
  );
}

export default HubForm;

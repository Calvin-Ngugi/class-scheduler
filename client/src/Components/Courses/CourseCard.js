import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ courses }) => {
  return (
    <>
      <div className="col">
          <div className="card mt-3 box">
            <h5 className="card-header">{courses.course_name}</h5>
            <div className="card-body">
              <h5 className="card-title">{courses.name}</h5>
              <p className="card-text">{courses.description}</p>
              <Link to={`courses/${courses.id}`} className="btn btn-primary">
                Read More...
              </Link>
            </div>
          </div>
        </div>
    </>
  );
};

export default CourseCard;

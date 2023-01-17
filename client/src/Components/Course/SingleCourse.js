import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Header from './Header';

const SingleCourse = ({user}) => {
  const [course, setCourse] = useState({})
  const [sessions, setSessions] = useState([])

  const { id } = useParams();

  useEffect(() => {
    fetch(`/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourse(data);
        setSessions(data.course_sessions);
      });
  }, []);

  return (
    <Header
      course={course}
      sessions={sessions}
    />
  )
}

export default SingleCourse
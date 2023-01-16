import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Header from './Header';
import Sessions from './Sessions';

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

  console.log(sessions);
  const displayCards = sessions.map((sessions) =>(
    <Sessions 
      key={sessions.id}
      sessions={sessions}
    />
  ));


  return (
    <>
    <Header
      course={course}
      sessions={sessions}
    />
    <div className='container mt-5'>
      <h3>Sessions Available</h3>
      {displayCards}
    </div>
    </>
  )
}

export default SingleCourse
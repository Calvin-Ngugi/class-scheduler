import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SessionDetails from './SessionDetails'

const Session = () => {
  const [session, setSession] = useState({})
  const [comments, setComments] = useState([])

  const { id } = useParams();

  useEffect(() => {
    fetch(`/course_sessions/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSession(data);
        setComments(data.comments);
      });
  }, []);

  return (
    <>
      <SessionDetails session={session}/>
    </>
  )
}

export default Session
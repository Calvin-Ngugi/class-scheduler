import React, { useState, useEffect } from 'react';

function CourseSessions() {
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('/course_sessions')
      .then(response => response.json())
      .then(data => {
        console.log("Data is ",data);
        setSessions(data);
        setIsLoading(false);
        
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);
  console.log("Sessions is ",sessions)
  return (
    <div className="col">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div >
          <ul >
           
          {sessions.map(session => (
            
            <li key={session.id}>

              <p>Session Date: {session.session_name}</p>
              <p>Session Time: {session.date}</p>
              <p>Session Duration: {session.invitation_link}</p>
              <p>Instructor Name: {session.brief_desc}</p>

            </li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
}

export default CourseSessions
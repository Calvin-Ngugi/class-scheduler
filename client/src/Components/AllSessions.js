import React, { useState, useEffect } from 'react';

function AllSessions() {
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(' /course_sessions')
      .then(response => response.json())
      .then(data => {
        setSessions(data.sessions);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {sessions.map(session => (
            <li key={session.id}>
              <p>Session Date: {session.date}</p>
              <p>Session Time: {session.time}</p>
              <p>Session Duration: {session.duration}</p>
              <p>Instructor Name: {session.instructorName}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AllSessions
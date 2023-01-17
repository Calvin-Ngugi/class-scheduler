import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AllSessions() {
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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

  return (
    <div className="col">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {sessions.map(session => (
            <Card key={session.id} style={{ width: '79rem' }}>
              <Card.Body>
                <Card.Title>{session.session_name}</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Session Date: {session.date}</ListGroup.Item>
                  <ListGroup.Item>Session Description: {session.brief_desc}</ListGroup.Item>

                </ListGroup>
                <Link to={`/session/${session.id}`}>
                  <Button variant="primary">More</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllSessions;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SessionDetails from "./SessionDetails";

const Session = ({user}) => {
  const [session, setSession] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({
    content: ""
  });

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

  const handleChange = (e) => {
    e.preventDefault();
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const session_id = session.id;
    const user_id = user.id;
    
    fetch(`/comments`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...comment, course_id, user_id}),
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = [...comments, data];
        setComments(newData)
        setError('')
        setComment({ content: '' })
      });
  };

  return (
    <>
      <SessionDetails session={session} />
      <h3 className="text-center mt-5">Share with us your reviews</h3>
      <div className="container mt-3 d-flex justify-content-center">
        
      </div>
    </>
  );
};

export default Session;

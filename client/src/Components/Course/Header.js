import React from 'react'

const Header = ({course, sessions}) => {
  return (
    <div className='container'>
        <h2>{course.course_name}</h2>
        <p>{course.description}</p>
        <span className="session-count">There are {sessions ? sessions.length : 0} sessions in this program</span> 
    </div>
  )
}

export default Header
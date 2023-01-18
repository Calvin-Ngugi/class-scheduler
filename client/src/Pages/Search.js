import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearchingCourses, setIsSearchingCourses] = useState(true);

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const fetchResults = async () => {
    const endpoint = isSearchingCourses ? '/search_courses' : '/search_coursesessions';
    const response = await fetch(`${endpoint}?query=${query}`);
    const data = await response.json();
    setResults(data);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim()) {
      fetchResults();
    }
  }

  useEffect(() => {
    // no need to fetch here, we use the handleSubmit
  }, [query, isSearchingCourses])

  return (
    <div>
      <Form inline="true" onSubmit={handleSubmit}>
        <FormControl type="text" placeholder="Search..." onChange={handleChange} value={query} />
        <Button type="submit">Search</Button>
      </Form>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isSearchingCourses}
            onChange={() => setIsSearchingCourses(!isSearchingCourses)}
          />
          Search for Courses
        </label>
      </div>
      <h3>Results</h3>
      <div>
        {results.map(result => (
          <div key={result.id}>
            <p>ID: {result.id}</p>
            <p>Name: {result.course_name || result.session_name}</p>
            <p>Description: {result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './MyJobs.css'

const MyJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {

        const fetchJobs = async () => {
            
        
        const token = localStorage.getItem('token');
        if(!token) {
            return navigate('/login');
        }
        const res = await axios.get("http://localhost:5000/api/client/jobs",{
            headers: {
                'Authorization': `Bearer ${token}`
                },
                withCredentials: true
        })
        setJobs(res.data.jobs);
        setLoading(false);

       
        
        }
        fetchJobs();
    }, []);
  
    if (loading) return <p>Loading your jobs...</p>;
    if (error) return <p>{error}</p>;
  
    return (
      <div className="my-jobs-container">
      <h2 className="my-jobs-title">My Jobs</h2>
      {jobs.length === 0 ? (
        <p className="no-jobs-text">You haven't posted any jobs yet.</p>
      ) : (
        <ul className="jobs-list">
          {jobs.map((job) => (
            <li key={job._id} className="job-item">
              <Link to={`/jobs/${job._id}`} className="job-link">
                {job.title} - ${job.budget}
              </Link>
            </li>
          ))}
        </ul>
      )}
  </div>
  
  )
}

export default MyJobs
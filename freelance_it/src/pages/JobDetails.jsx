import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './JobDetail.css'
const JobDetails = () => {
      const {id} = useParams();
     const navigate = useNavigate();
     const [jobs , setJobs] = useState([]);
     const [status , setStatus] = useState("");


     useEffect( () =>{
               
        axios.get(`http://localhost:5000/api/jobs/${id}`)
        .then ( (res) => {setJobs(res.data.job)
            setStatus(res.data.job.status)
        })
        .catch ( (err) => console.log(err))
     },[id]);


     const handleDelete = () =>{
            
          const token = localStorage.getItem('token')

        if(!token) {
            return navigate('/login')
        }


        axios.delete(`http://localhost:5000/api/jobs/${id}`,
            {
                headers : {
                  'Authorization' : `Bearer ${token}`
                },
                withCredentials : true
              }
        )
        .then(() =>navigate('/jobsList'))
        .catch((err) => console.log(err))
     };

      const handleUpdate = () =>{
              
        const token = localStorage.getItem('token')
        if(!token) {
            return navigate('/login')
        }

          axios.put(`http://localhost:5000/api/jobs/${id}`, 
            {status} ,
            {
              headers : {
                'Authorization' : `Bearer ${token}`
              },
              withCredentials : true
            }
          )
          .then( (res) => setJobs(res.data.job))
          .catch( (err) => console.log(err))
      }


       if(!jobs) {
        return <div>Loading...</div>;
       }


  return (
    <div className="job-details-container">
  <h1>Job Details</h1>

  <div className="job-info">
    <h2>{jobs.title}</h2>
    <p className="job-description">{jobs.description}</p>

    <div className="job-columns">
      <p>Budget: ${jobs.budget}</p>
      <p>Status: {jobs.status}</p>
    </div>
  </div>

  <div className="job-actions">
    <div className="job-status-update">
      <label>Update Status:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="open">Open</option>
        <option value="in Progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={handleUpdate}>Update</button>
    </div>

    <Link to={`jobs/update/${jobs._id}`} className="edit-link">
      Edit Job
    </Link>

    <button onClick={handleDelete} className="delete-btn">
      Delete Job
    </button>
  </div>

  <Link to={`/jobs/${jobs._id}/proposal/new`} className="submit-proposal">
    Submit Proposal
  </Link>
</div>

  )
}

export default JobDetails
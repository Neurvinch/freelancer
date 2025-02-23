import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

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
    <div >
        <h1>Job Details</h1>
          
          <h2>{jobs.title}</h2>
          <p>{jobs.description}</p>
          <p>${jobs.budget}</p>
          <p>{jobs.status}</p>

          <div>
            <label>Update Status:</label>
              <select  value={status}
               onChange={(e) => setStatus(e.target.value)}
               >
                <option value="open">open</option>
                <option value="in Progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
               <button  onClick={handleUpdate}  >Update</button>
                     
                     <div>
                        <Link to ={`jobs/update/${jobs._id}`}> Edit Job </Link>
                     </div>

                     <button onClick={handleDelete}>Delete Job</button>
          </div>

          <Link  to={`/jobs/${jobs._id}/proposal/new`} >
          Submit Proposal
          </Link>
          


    </div>
  )
}

export default JobDetails
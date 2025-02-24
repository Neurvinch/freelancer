import axios from 'axios';
import React, { useEffect , useState } from 'react';
import {  useParams, Link } from 'react-router-dom'
  import './FreelancerjobDetails.css'
const FreelancerJobDetails = () => {
      const {id} = useParams();
       const [jobs , setJobs] = useState([]);

   
  


     useEffect( () =>{
               
        axios.get(`http://localhost:5000/api/jobs/${id}`)
        .then ( (res) => {setJobs(res.data.job)
            setStatus(res.data.job.status)
        })
        .catch ( (err) => console.log(err))
     },[id]);


     

    

       if(!jobs) {
        return <div>Loading...</div>;
       }


  return (
    <div >

  <div className="job-info">
    <h2>{jobs.title}</h2>
    <p className="job-description">{jobs.description}</p>

    <div className="job-columns">
      <p>Budget: ${jobs.budget}</p>
      <p>Status: {jobs.status}</p>
    </div>

    <Link to={`/jobs/${jobs._id}/proposal/new`} className="submit-proposal">
    Submit Proposal
  </Link>
   <Link to={`/proposal/${jobs._id}/edit`}>
       Edit Proposals
   </Link>

  </div>



   
 

  
 
</div>

  )
}

export default FreelancerJobDetails
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProposalList = () => {
    const {jobId} = useParams();
     const [proposals , setProposals] = useState([]);
     const [loading , setLoading] = useState(true);

     useEffect( () =>{
         const fetchProposals = async () =>{
            try {
                const response = await axios.get(`http://localhost:5000/api/jobs/${jobId}/proposals`);

                setProposals(response.data.proposals);
                
            } catch (error) {
                
            }
         }
     },[])
  return (
    <div>ProposalList</div>
  )
}

export default ProposalList
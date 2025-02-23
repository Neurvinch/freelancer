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
                const token = localStorage.getItem('token');

                if(!token) {
                    return navigate('/login');
                }
              

                const response = await axios.get(`http://localhost:5000/api/jobs/${jobId}/proposal`,
                    {
                        headers: {
                            'Authorization' : `Bearer ${token}`
                    },
                    withCredentials : true
                    }
                );

                setProposals(response.data.proposal);
                
            } catch (error) {
                console.log(error);
             } finally{
                setLoading(false);
             }
         }
          fetchProposals();
     },[jobId])


     if(loading) return <h1>Loading...</h1>;

  return (
    <div>
        <h1>Proposal List</h1>

          {proposals.length === 0 ? (
            <p> No Proposals Submitted yet </p>

          ) : (
            <ul>
                {proposals.map( ( p) =>(
                    <li key={p._id}  >

                        <p>
                            <strong>Freelancer :</strong>
                            <span> {p.freelancer.name}</span>
                        </p>

                        <p>
                            <strong>Proposal Amount:</strong>
                            <span> {p.proposalAmount}</span>
                        </p>

                        <p> {p.proposalText} </p>

                    </li>
                )  )}
            </ul>
          ) }

 

    </div>
  )
}

export default ProposalList
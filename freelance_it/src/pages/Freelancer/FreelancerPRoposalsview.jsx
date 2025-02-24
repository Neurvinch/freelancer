import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const FreelancerPRoposalsview = () => {

    const[proposals, setProposals] = useState([])
    const[loading , setLoading] = useState(true)
    const[error , setError] = useState(false)

      useEffect( ()  =>{
         
         const fetchdata = async () =>{
                 
            const token = localStorage.getItem('token')
               

             await axios.get('http://localhost:5000/api/proposals/my',
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                        },
                        withCredentials: true
                }
             )

             .then(res =>{
                setProposals(res.data.proposals)
                setLoading(false)
             })
             .catch(err =>{
                setError(true)
                setLoading(false)
                })



         }

         fetchdata();

      },[])
              
      {loading && <h1>Loading...</h1>}
      {error && <h1>error</h1>}

  return (
    <div>
        <h1>Freelancer Proposals</h1>

        {proposals.length === 0  ? ( <h1>No Proposals</h1> ):
        (
            <ul>
            {proposals.map( (prop) => (
                <li key={prop._id}>
                    <p>
                             <strong>Job:</strong>
                             {prop.job.title} || "N/A"

                    </p>
                    <p>
                        <strong>ProposedAmount:</strong>
                        {prop.proposedAmount} || "N/A"
                    </p>
                    <p>
                        {prop.proposalText}
                    </p>
                    <Link
                      to={`/proposals/${prop._id}/edit`}

                    >
                        Edit Proposal
                    </Link>

                </li>

            ))}
            </ul>
        )
    }
    </div>
  )
}

export default FreelancerPRoposalsview
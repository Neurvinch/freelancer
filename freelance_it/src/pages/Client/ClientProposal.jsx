import React, { useEffect , useState } from 'react'
import './ClientProposal.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const ClientProposal = () => {
           const {id} = useParams();
           const[proposals, setProposals] = useState([]);
           const [loading , setLoading] = useState(true);
           const [error , setError] = useState(null);
           
           useEffect( () => {
                 
                    const fetchProposals = async () => {
                        const token = localStorage.getItem('token');
                        if(!token) {
                            return navigate('/login');
                        }
                        const response = await axios.get(`http://localhost:5000/api/client/jobs/${id}/proposal`,
                         {
                            headers: {
                                'Authorization' : `Bearer ${token}`
                            },
                            withCredentials : true
                        });
                        setProposals(response.data.proposals);
                        setLoading(false);

                    }
                    
                

                 fetchProposals()
                 
                
           },[id])

           {loading && <p>Loading...</p>}
           {error && <p>{error}</p>}


  return (
    <div className="proposals-container">
    <img src="/imagef7.png" alt="Proposals" className="proposals-image" />
    <h2>Proposals for this Job</h2>
    {proposals.length === 0 ? (
      <p className="no-proposals">No proposals submitted yet.</p>
    ) : (
      <ul className="proposals-list">
        {proposals.map((proposal) => (
          <li key={proposal._id} className="proposal-item">
            <p><strong>Freelancer:</strong> {proposal.freelancer.name}</p>
            <p><strong>Proposed Amount:</strong> ${proposal.proposedAmount}</p>
            <p>{proposal.proposalText}</p>
          </li>
        ))}
      </ul>
    )}
</div>


  )
}

export default ClientProposal
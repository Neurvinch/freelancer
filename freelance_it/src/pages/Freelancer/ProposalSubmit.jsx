import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './ProposalSubmit.css'
const ProposalSubmit = () => {
      const {jobId} =   useParams();

      const navigate = useNavigate();

      const [proposalText , setProposalText] = useState('');
      const [proposalAmount , setProposalAmount] = useState('');


      const handleSubmit = async (e) =>{
        e.preventDefault();
         
          try {

             const token = localStorage.getItem('token')

            if(!token) {
                alert('Please login to submit proposal')
                return navigate('/login')
            }

            const payload = {
                proposalText,
                proposalAmount: Number(proposalAmount)
            };

              await axios.post(`http://localhost:5000/api/jobs/${jobId}/proposal`, payload,
                {
                    headers: {
                      'Authorization': `Bearer ${token}`,
                    },
                    withCredentials: true
                }
              );
              
             navigate(`/jobs/${jobId}`)
              
            
          } catch (error) {
             console.error(error , " Error submitting proposal");
          }
        }
  return (
    <div className="proposal-container">
    <div className="proposal-form-container">
        <h1>Submit Proposal</h1>
        <form onSubmit={handleSubmit}>
            <label>Proposal Text:</label>
            <textarea
                value={proposalText}
                onChange={(e) => setProposalText(e.target.value)}
            />
            <label>Proposal Amount:</label>
            <input
                type="number"
                value={proposalAmount}
                onChange={(e) => setProposalAmount(e.target.value)}
            />
            <button  className="btn btn--full margin-right-sm" type='submit'>Submit Proposal</button>
        </form>
    </div>
    <div className="proposal-image">
        <img src="/imagef5.png" alt="Proposal Illustration" />
    </div>
</div>

   
  )
}
export default ProposalSubmit
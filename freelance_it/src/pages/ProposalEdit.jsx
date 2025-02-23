import React, { useEffect } from 'react'
import {useNavigate, useparams} from 'react-router-dom'
import axios from 'axios'

const ProposalEdit = () => {
       const {id} = useparams();
       const navigate = useNavigate();
       const [proposalText , setProposalText] = useState('');
       const [proposalAmount , setProposalAmount] = useState('');
      
        useEffect( () =>{
              
            const fetchProposal = async () =>{
                const response = await axios
            }
        },[] )




  return (
    <div>ProposalEdit</div>
  )
}

export default ProposalEdit
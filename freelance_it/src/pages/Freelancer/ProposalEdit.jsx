import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProposalEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [proposalText, setProposalText] = useState('');
  const [proposalAmount, setProposalAmount] = useState('');

  useEffect(() => {
    const fetchProposal = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          return navigate('/login');
        }
        const response = await axios.get(`http://localhost:5000/api/proposal/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          withCredentials: true,
        });
        const proposal = response.data.proposal;
        setProposalText(proposal.proposalText);
        setProposalAmount(proposal.proposalAmount);
      } catch (error) {
        console.error("Error fetching proposal:", error);
      }
    };
    fetchProposal();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return navigate('/login');
      }
      const payload = {
        proposalText,
        proposalAmount,
      };
      await axios.put(`http://localhost:5000/api/proposal/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      navigate(-1);
    } catch (error) {
      console.error("Error updating proposal:", error);
    }
  };

  return (
    <div>
      <h1>Edit Proposal</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Proposal Text:
          <input
            type="text"
            value={proposalText}
            onChange={(e) => setProposalText(e.target.value)}
          />
        </label>
        <label>
          Proposal Amount:
          <input
            type="number"
            value={proposalAmount}
            onChange={(e) => setProposalAmount(e.target.value)}
          />
        </label>
        <button type="submit">Update Proposal</button>
      </form>
    </div>
  );
};

export default ProposalEdit;

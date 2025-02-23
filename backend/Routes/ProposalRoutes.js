const express = require('express');
const { createProposal, getProposalId, updateProposal } = require('../controller/proposalController');
const router = express.Router();
const { identifer } = require('../middleware/identifer');


router.post ("/jobs/:jobId/proposal" , identifer(["freelancer"]) , createProposal);

router.get ("/jobs/:jobId/proposal" , identifer(["freelancer"]) , getProposalId);

router.put("proposal/:id" , identifer(["freelancer"]) , updateProposal);

module.exports = router;
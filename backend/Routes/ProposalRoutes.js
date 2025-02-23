const express = require('express');
const { createProposal, getProposalId, updateProposal, getSingleProposalById, clientProposals } = require('../controller/proposalController');
const router = express.Router();
const { identifer } = require('../middleware/identifer');


router.post ("/jobs/:jobId/proposal" , identifer(["freelancer"]) , createProposal);

router.get ("/jobs/:jobId/proposal" , identifer(["freelancer"]) , getProposalId);

router.put("proposal/:id" , identifer(["freelancer"]) , updateProposal);

router.get("/proposal/:id" , identifer(["freelancer"]) , getSingleProposalById);

router.get("/client/jobs/:id/proposal" , identifer(['client']) , clientProposals);


module.exports = router;
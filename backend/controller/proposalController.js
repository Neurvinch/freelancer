const jobCreationModel = require("../models/jobCreationModel");
const ProposalModel = require("../models/ProposalModel");


exports.createProposal = async (req, res) =>{

     try {
        const {jobId} = req.params;

        const {proposalText , proposalAmount} = req.body;

        const freelancer = req.user.id || req.user._id


        const newproposal = new ProposalModel({
               
            job : jobId,
            freelancer,
            proposalText,
            proposalAmount
        });

        const savedProposal = await newproposal.save();

        res.status(200).json({
            success : true,
            savedProposal ,
            message : "Proposal created successfully"
        })

        
     } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
     }
};


exports.getProposalId = async (req ,res) =>{
    try {
        const {jobId} = req.params;

        const proposal = await ProposalModel.find({job : jobId}).populate("freelancer" , "name email").sort({createdAt : -1});

        res.status(200).json({
            success : true,
            proposal
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}


exports.updateProposal = async(req,res) =>{
    try {
        const proposalId = req.params.id;
        const updateProposal = await ProposalModel.findByIdAndUpdate(proposalId,
            {$set : req.body},
            {new : true},
        )
        if(!updateProposal){
            return res.status(404).json({
                success : false,
                message : "Proposal not found"
            })
        }
        res.status(200).json({
            success : true,
            updateProposal
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

exports.getSingleProposalById = async(Req ,res) =>{
    try {
        const proposal = await ProposalModel.findById(Req.params.id)
        .populate("freelancer" , "name email")
        .populate("job" , "title description")

        if(!proposal){
            return res.status(404).json({
                success : false,
                message : "Proposal not found"
                })
        }
         res.status(200).json({
            success : true,
            proposal
            })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

exports.clientProposals = async (req, res) =>{
    try { 
        const jobId = req.params.id;

        const job = await jobCreationModel.findById(jobId);

        if(!job){
            return res.status(404).json({
                success : false,
                message : "Job not found"
            })
        }

         
         if(job.client.toString() !== req.user.id){
            return res.status(401).json({
                success : false,
                message : "You are not the client of this job"
                })
         }

         const proposals = await ProposalModel.find({job : jobId}).populate("freelancer" , "name email")

         res.status(200).json({
            success : true,
            proposals
         })


        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}
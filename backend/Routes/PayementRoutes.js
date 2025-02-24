const express = require("express");
const { createOrder ,verifyPayement } = require("../controller/PayementController");
const router = express.Router();
const { identifer } = require("../middleware/identifer");

router.post("/payement/create-order" , identifer(["client"]) , createOrder);

router.post("/payement/verify", identifer(["client"]) , verifyPayement);

module.exports = router;
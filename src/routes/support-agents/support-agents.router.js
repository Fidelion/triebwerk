const express = require("express");
const supportAgentsRouter = express.Router();
const {
	addSupportAgent,
	removeSupportAgent,
	listAllSupportAgents,
	getSupportAgent,
	changeAgentsStatus,
} = require("../../controllers/support-agents.controller");

supportAgentsRouter.get("/", listAllSupportAgents);
supportAgentsRouter.get("/:id", getSupportAgent);
supportAgentsRouter.post("/", addSupportAgent);
supportAgentsRouter.delete("/:id", removeSupportAgent);
supportAgentsRouter.post("/:id/status", changeAgentsStatus);

module.exports = supportAgentsRouter;

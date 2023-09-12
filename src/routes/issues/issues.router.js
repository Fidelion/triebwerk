const express = require("express");
const planetsRouter = express.Router();
const {
	listAllTheIsues,
	reportIssue,
	resolveIssue,
	removeIssue,
} = require("../../controllers/issues.controller");

planetsRouter.get("/", listAllTheIsues);
planetsRouter.post("/", reportIssue);
planetsRouter.post("/:id", resolveIssue);
planetsRouter.delete("/:id", removeIssue);

module.exports = planetsRouter;

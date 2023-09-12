const express = require("express");

const issuesRouter = require("../routes/issues/issues.router");
const supportAgentsRouter = require("../routes/support-agents/support-agents.router");

const api = express.Router();

api.use("/issues", issuesRouter);
api.use("/support-agents", supportAgentsRouter);

module.exports = api;

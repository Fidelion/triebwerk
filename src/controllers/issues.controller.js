const Issue = require("../models/issues");
const SupportAgent = require("../models/support-agents");
const { eventEmitter, Events } = require("../utils/issues.event-emitter");

async function listAllTheIsues(req, res) {
	const issues = await Issue.findAll();
	if (!issues) {
		return res.status(404).send("Issues table is empty");
	}
	res.send(issues);
}

async function reportIssue(req, res) {
	const freeAgent = await SupportAgent.findOne({
		where: { isAvailable: true },
	});
	const issue = await Issue.create({
		description: req.body.description,
		supportAgentId: freeAgent ? freeAgent.id : null,
	});

	if (freeAgent) {
		freeAgent.isAvailable = false;
		await freeAgent.save();
	}

	res.send(issue);
}

async function resolveIssue(req, res) {
	const issue = await Issue.findByPk(req.params.id);

	if (!issue) {
		return res.status(404).send("Issue not found");
	}

	issue.resolved = true;
	await issue.save();

	if (issue.supportAgentId) {
		const agent = await SupportAgent.findByPk(issue.supportAgentId);
		if (agent) {
			agent.isAvailable = true;
			await agent.save();
			eventEmitter.emit(Events.UNASSIGNED_ISSUES);
		}
	}

	res.send(issue);
}

async function removeIssue(req, res) {
	const issue = await Issue.findByPk(req.params.id);
	if (!issue) {
		return res.status(404).send("Issue not found");
	}
	await issue.destroy();
	res.send({ message: "Issue removed" });
}

module.exports = {
	listAllTheIsues,
	reportIssue,
	resolveIssue,
	removeIssue,
};

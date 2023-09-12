const SupportAgent = require("../models/support-agents");
const Issue = require("../models/issues");

// Function to assign unassigned issues to available support agents
async function assignUnassignedIssues() {
	const unassignedIssues = await Issue.findAll({
		where: { supportAgentId: null },
	});

	for (const issue of unassignedIssues) {
		const freeAgent = await SupportAgent.findOne({
			where: { isAvailable: true },
		});

		if (freeAgent) {
			issue.supportAgentId = freeAgent.id;
			await issue.save();

			freeAgent.isAvailable = false;
			await freeAgent.save();
		}
	}
}

module.exports = assignUnassignedIssues;

const SupportAgent = require("../models/support-agents");

async function addSupportAgent(req, res) {
	const { name, age, email } = req.body;
	const agent = await SupportAgent.create({
		isAvailable: true,
		name,
		age,
		email,
	});
	res.send(agent);
}

async function listAllSupportAgents(req, res) {
	const agents = await SupportAgent.findAll();
	if (!agents) {
		return res.status(404).send("Support Agents table is empty");
	}
	res.send(agents);
}

async function getSupportAgent(req, res) {
	const agent = await SupportAgent.findByPk(req.params.id);
	if (!agent) {
		return res.status(404).send("Support Agent not found");
	}
	res.send(agent);
}

async function removeSupportAgent(req, res) {
	const agent = await SupportAgent.findByPk(req.params.id);
	if (!agent) {
		return res.status(404).send("Support Agent not found");
	}
	if (!agent.isAvailable) {
		return res
			.status(400)
			.send(
				"Support Agent has an assigend issue." +
					" Please change the status or make sure an " +
					"issue is resolved before deleting this user."
			);
	}
	await agent.destroy();
	res.send({ message: "Support Agent removed" });
}

async function changeAgentsStatus(req, res) {
	const agent = await SupportAgent.findByPk(req.params.id);
	if (!agent) {
		return res.status(404).send("Support Agent not found");
	}
	agent.isAvailable = !agent.isAvailable;
	await agent.save();
	res.send({ message: "Support Agents status changed" });
}

module.exports = {
	addSupportAgent,
	listAllSupportAgents,
	getSupportAgent,
	removeSupportAgent,
	changeAgentsStatus,
};

const cron = require("node-cron");
const assignUnassignedIssues = require("./unassigned-issues");

// Schedule the cron job to run every minute
function scheduleCronJobs() {
	cron.schedule("*/1 * * * *", async () => {
		console.log("Running the cron job");
		await assignUnassignedIssues();
	});
}

module.exports = scheduleCronJobs;

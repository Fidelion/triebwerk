const http = require("http");
const sequelize = require("./utils/db");
const app = require("./app");
const scheduleCronJobs = require("./utils/cron");
const { eventEmitter, Events } = require("./utils/issues.event-emitter");
const assignUnassignedIssues = require("./utils/unassigned-issues");

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

sequelize
	.sync()
	.then(() => {
		server.listen(PORT, () => {
			console.log("Server started on http://localhost:3000");
		});
		scheduleCronJobs();
		eventEmitter.on(Events.UNASSIGNED_ISSUES, async () => {
			console.log("Checking for unassigned issues");
			await assignUnassignedIssues();
		});
	})
	.catch((err) => {
		console.log(err);
	});

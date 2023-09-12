const EventEmitter = require("events");

const Events = {
	UNASSIGNED_ISSUES: "checkForUnassignedIssues",
};
const eventEmitter = new EventEmitter();

module.exports = {
	eventEmitter,
	Events,
};

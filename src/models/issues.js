const DataTypes = require("sequelize");
const sequelize = require("../utils/db");

const Issue = sequelize.define(
	"issue",
	{
		description: DataTypes.STRING,
		resolved: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		supportAgentId: DataTypes.INTEGER,
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
	},
	{ timestamps: false }
);

module.exports = Issue;

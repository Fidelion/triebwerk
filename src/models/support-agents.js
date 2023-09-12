const DataTypes = require("sequelize");
const sequelize = require("../utils/db");

const SupportAgent = sequelize.define(
	"supportAgent",
	{
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		age: DataTypes.INTEGER,
		isAvailable: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
	},
	{ timestamps: false }
);

module.exports = SupportAgent;

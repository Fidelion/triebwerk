const Sequelize = require("sequelize");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "triebwerk-support.db",
});

module.exports = sequelize;

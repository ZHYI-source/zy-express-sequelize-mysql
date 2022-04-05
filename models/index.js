const fs = require("fs");
const path = require("path");
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 获取映射文件路径
let modelsPath = path.join(process.cwd(),"/models");
console.log("ok",modelsPath)

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);


module.exports = db;
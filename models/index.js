const fs = require("fs");
const path = require("path");
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    timezone: '+08:00', //东八时区
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;//引入

db.sequelize = sequelize;//实例

// 获取映射文件路径
// let modelsPath = path.join(process.cwd(),"/models");
// console.log("ok",modelsPath)

db.users = require("./users.model.js")(sequelize, Sequelize);


module.exports = db;

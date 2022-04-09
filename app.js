const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const chalk = require('chalk'); // https://www.npmjs.com/package/chalk
// 路由加载
const mount = require('mount-routes')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
//处理请求参数解析
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const db = require("./models");

db.sequelize.sync();
// 设置跨域和相应数据格式
app.all('/api/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, token')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization')
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    if (req.method == 'OPTIONS') res.send(200)
    /*让options请求快速返回*/
    else next()

})

// 使用swagger API 文档
const expressSwagger = require('express-swagger-generator')(app)
const options = require('./utils/swagger') //配置信息
expressSwagger(options)

// 统一响应机制
const UnifiedResponse = require('./utils/utils.resextra')
app.use(UnifiedResponse)

// 带路径的用法并且可以打印出路有表  true 代表展示路由表在打印台
mount(app, path.join(process.cwd(), '/routes'), true)


// 处理无响应 如果没有路径处理就返回 Not Found
app.use(function (req, res, next) {
    res.sendResult(null, 404, 'Not Found')
})
app.listen(process.env.DEV_PORT, () => {
    console.log(chalk.bold.green(`项目启动成功: ${process.env.DEV_URL}:${process.env.DEV_PORT}`));
    console.log(chalk.bold.green(`接口文档地址: ${process.env.DEV_URL}:${process.env.DEV_PORT}/swagger`));

})

module.exports = app

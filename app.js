const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
// 路由加载
const mount = require('mount-routes')
const logger = require("./utils/util.logger").logger();
const app = express()
const port = 3001

//处理请求参数解析
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 设置跨域和相应数据格式
app.all('/api/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, token')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization')
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    if (req.method == 'OPTIONS') res.send(200)
    /*让options请求快速返回*/
    else next()

})


// 带路径的用法并且可以打印出路有表
mount(app, path.join(process.cwd(), '/routes'), true)

app.listen(port, () => {
    console.log(` http://localhost:${port}`)
})

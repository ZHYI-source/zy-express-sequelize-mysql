
 
# 书中枫叶’Express-Mysql-Server

`Express-Mysql-Server` 项目是一套 集成 `express` `sequelize` `swagger-ui` 框架 api 模板，

<!-- PROJECT SHIELDS -->

[![star](https://gitee.com/Z568_568/zy-express-sequelize-mysql/badge/star.svg?theme=dark)](https://gitee.com/Z568_568/zy-express-sequelize-mysql/stargazers)
[![fork](https://gitee.com/Z568_568/zy-express-sequelize-mysql/badge/fork.svg?theme=dark)](https://gitee.com/Z568_568/zy-express-sequelize-mysql/members)

<!-- PROJECT LOGO -->
<br />

<p align="center">
  <a href="https://github.com/shaojintian/Best_README_template/">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>


<h3 align="center">"Express-Mysql-Server"</h3>
  <p align="center">
    一个 "开箱即用" node接口服务模板去快速开始你的项目！
    <br />
    <a href="https://github.com/shaojintian/Best_README_template"><strong>探索本项目的文档 »</strong></a>
    <br />
    <br />
    <a href="https://github.com/shaojintian/Best_README_template">查看Demo</a>
    ·
    <a href="https://github.com/shaojintian/Best_README_template/issues">报告Bug</a>
    ·
    <a href="https://github.com/shaojintian/Best_README_template/issues">提出新特性</a>
  </p>


</p>


本项目面向学习node接口服务开发者
***
## 目录

- [详细上手指南](#详细上手指南)
    - [开发前的配置要求](#开发前的配置要求)
    - [安装步骤](#安装步骤)
- [文件目录说明](#文件目录说明)
- [开发的架构](#开发的架构)
- [部署](#部署)
- [使用到的框架](#使用到的框架)
- [贡献者](#贡献者)
    - [如何参与开源项目](#如何参与开源项目)
- [版本控制](#版本控制)
- [作者](#作者)

***
### 详细上手指南

###### 开发前的配置要求

```shell
1. node.js 环境
2. Express.js 框架
3. IDEA / WebStorm / VS Code 开发工具
4. Navicat 可视化数据库
5. apiPost / postman 接口调试工具
```
***
###### **安装步骤**

1. 克隆本项目代码

```sh
git clone https://gitee.com/Z568_568/zy-express-sequelize-mysql.git
```
2. 安装依赖

```sh
npm install
```
3.打开 `Navicat软件` 创建数据库  `mk_db`

4.配置数据库信息 `文件 config/db.config.js`

```sh
HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "mk_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
 ```
5. 配置文件上传地址信息 `文件 config/upload.config.js`

```sh
module.exports = {
    "baseURL":"http://localhost:3001",
}
```
6.启动项目
`````sh
nodemon app.js (热加载)  or  node app.js
`````
7.启动成功示例
```shell
项目启动成功: http://localhost:3001
接口文档地址: http://localhost:3001/swagger
```
8.测试接口: 打开`postman / apiPost 软件` 输入`获取验证码接口地址`
<br/>
<br/>
**注意：** 测试接口中 `'/api/private/' 开头的接口地址都需要进行token验证，在请求头 header中加入 authorization 并携带 token`
<br/>
<br/>
获取 token 需要在 登录接口进行 登录后 返回 token

```shell
eg:获取验证码接口 （无需token验证）

 GET http://localhost:3001/api/public/v1/captcha 
```
```shell
响应结果是 Svg 格式
**********************
{
	"data": {
		"codeSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\"....></svg>",
		"codeText": "06PEo3AZTK41g7oA7paQAg==",
		"key": 1649573015653
	},
	"meta": {
		"msg": "获取验证码成功",
		"status": 200
	}
}
```
9.上面的步骤都已经成功，你就可以开始 增加模块进行 接口开发 并且加上规范的swagger注解后 自动生成接口文档。快去试试吧

***
### 文件目录说明

```
filetree 
├── ARCHITECTURE.md
├── LICENSE.txt
├── README.md
├── /account/
├── /bbs/
├── /docs/
│  ├── /rules/
│  │  ├── backend.txt
│  │  └── frontend.txt
├── manage.py
├── /oa/
├── /static/
├── /templates/
├── useless.md
└── /util/

```





### 开发的架构


### 部署

暂无

### 使用到的框架

- [Express.js](https://expressjs.com/zh-cn/)
- [Sequelize](https://www.sequelize.com.cn/)
- [Swagger-ui](http://www.npmdoc.org/swagger-node-expresszhongwenwendangswagger-node-express-jszhongwenjiaochengjiexi.html)

### 贡献者



### 版本控制

该项目使用Git进行版本管理。

### 作者

1840354092@qq.com

知乎:芒果快熟  &ensp; qq:1840354092


[comment]: <> (### 版权说明)



 

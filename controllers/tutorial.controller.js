const db = require("../models");
const logger = require("../utils/utils.logger").logger();
const DAO = require("../dao/DAO");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;
const path = require('path')
const fs = require('fs')

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // 请求验证
    if (!req.body.title)  return res.sendResult({data: '', code: 500, message: "标题不能为空！"})

    // Create a Tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };
    DAO.create(Tutorial, tutorial, data => {
        res.sendResult(data)
    })
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const pm = req.body;
    DAO.list(Tutorial, pm, list => {
        logger.debug(`${req.method} ${req.baseUrl + req.path} *** 参数：${JSON.stringify(pm)}; 响应：${JSON.stringify(list)}`);
        res.sendResult(list)
    })
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    DAO.findOne(Tutorial,req.params,data=>{
        res.sendResult(data)
    })
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const params = req.body;
    // 请求验证
    if (!params.id)  return res.sendResult({data: '', code: 500, message: "ID不能为空！"})
    DAO.update(Tutorial,params,{id:params.id},data=>{
        res.sendResult(data)
    })

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const params = req.body;
    // 请求验证
    if (!params.id)  return res.sendResult({data: '', code: 500, message: "ID不能为空！"})
    DAO.delete(Tutorial,{id:params.id},data=>{
        res.sendResult(data)
    })

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    DAO.deleteAll(Tutorial,data=>{
        res.sendResult(data)
    })
};

// Delete Tutorials from the database.
exports.query = (req, res) => {
    let sql = 'SELECT * FROM `tutorials`'
    DAO.doQuery(sql,data=>{
        res.sendResult(data)
    })
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({where: {published: true}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

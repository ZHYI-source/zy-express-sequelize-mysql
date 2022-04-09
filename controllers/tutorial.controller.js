const db = require("../models");
const logger = require("../utils/utils.logger").logger();
const utilsTools = require("../utils/utils.tools");
const DAO = require("../dao/DAO");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;
const path = require('path')
const fs = require('fs')

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.sendResult({}, 400, "标题不能为空！")
        return;
    }

    // Create a Tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save Tutorial in the database
    Tutorial.create(tutorial)
        .then(data => {
            logger.debug(`${req.method} ${req.baseUrl + req.path} *** 参数：${JSON.stringify(req.body)}; 响应："创建成功!"`);
            res.sendResult(data, 200, "创建成功!")
        })
        .catch(err => {
            res.sendResult(err, 500, err.message || "Some error occurred while creating the Tutorial.")
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const pm = req.body;
    DAO.list(Tutorial,pm,list=>{
        logger.debug(`${req.method} ${req.baseUrl + req.path} *** 参数：${JSON.stringify(pm)}; 响应：${JSON.stringify(list)}`);
        res.sendResult(list)
    })
    //查询数据条数
    // Tutorial.findAndCountAll(conditions).then(data => {
    //     count = data.count
    // })
    // Tutorial.findAll(conditions)
    //     .then(data => {
    //         logger.debug(`${req.method} ${req.baseUrl + req.path} *** 参数：${JSON.stringify(req.body)}; 响应：${JSON.stringify(data)}`);
    //         res.sendResult({data, count}, 200, "查询成功!")
    //     })
    //     .catch(err => {
    //         res.sendResult('', 500, err.message || "Some error occurred while retrieving tutorials.")
    //     });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Tutorial.findByPk(id)
        .then(data => {
            res.sendResult(data, 200, "查询成功!")
        })
        .catch(err => {
            res.sendResult('', 500, "Error retrieving Tutorial with id=" + id)
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tutorial.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tutorial.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({message: `${nums} Tutorials were deleted successfully!`});
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
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

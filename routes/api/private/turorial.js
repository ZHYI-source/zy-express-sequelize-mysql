const express = require('express');
const router = express.Router();
const path = require("path");
const logger = require("../../../utils/utils.logger").logger();
const tutorials = require("../../../controllers/tutorial.controller.js");

/**
 * 用户信息注册
 * @route POST /api/private/turorial/register
 * @group user - Operations about user
 * @param {string} username.query.required - 请输入用户名
 * @param {number} password.query.required - 请输入密码
 * @param {string} email.query.required - 请输入合法邮箱
 * @returns {object} 200 - An array of user info
 * @returns {object} 500 - 请求失败
 * @returns {Error}  default - Unexpected error
 */
router.post("/create", tutorials.create);

// Retrieve all Tutorials
router.get("/list", tutorials.findAll);

router.post("/list", tutorials.findAll);
// Update a Tutorial with id
router.post("/update", tutorials.update);

// Delete a Tutorial with id
router.post("/delete", tutorials.delete);

// Delete all Tutorials
router.post("/deleteAll", tutorials.deleteAll);
// Delete all Tutorials
router.post("/query", tutorials.query);

module.exports = router;

const express = require('express');
const router = express.Router();
const path = require("path");
const logger = require("../../utils/util.logger").logger();

router.get('/list',
    // 验证参数֤
    (req, res, next) => {
        //验证...
        next()
    },
    // 逻辑处理
    (req, res, next) => {
        logger.debug(`${req.method} ${req.baseUrl + req.path} *** 参数：${JSON.stringify(req.query)}; 响应：${JSON.stringify({name: '小明'})}`);

        res.send("这是测试")
    }
)
module.exports = router;

const express = require('express');
const router = express.Router();
const path = require("path");
const logger = require("../../../utils/utils.logger").logger();

router.get('/list',
    // 验证参数֤
    (req, res, next) => {
        //验证...
        next()
    },
    // 逻辑处理
    (req, res, next) => {
        logger.debug(`${req.method} ${req.baseUrl + req.path} *** 参数：${JSON.stringify(req.query)}; 响应：${JSON.stringify({name: '小明'})}`);
        res.sendResult(`${Number(process.env.DEV_PORT)}`,200,'success')
    }
)
module.exports = router;

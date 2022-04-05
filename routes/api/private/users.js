const express = require('express');
const router = express.Router();
const path = require("path");
const logger = require("../../../utils/utils.logger").logger();

/**,
 * @swagger
 * /list:
 *    get:
 *      tags:
 *      - 用户管理
 *      summary: 用户列表
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: name
 *        in: query
 *        description: 姓名
 *        required: true
 *        type: string
 *        maximum:
 *        minimum: 1
 *        format:
 *      responses:
 *        200:
 *          description: successful operation
 *          schema:
 *            ref: #/definitions/Order
 *        400:
 *          description: Invalid ID supplied
 *        404:
 *          description: Order not found
 *          security:

 * */


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

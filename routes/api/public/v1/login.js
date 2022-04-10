let express = require('express');
let router = express.Router();
const db = require("../../../../models");
const logger = require("../../../../utils/utils.logger").logger();
const DAO = require("../../../../dao/DAO");
const {aes} = require('../../../../utils/utils.crypto')
const jwt = require('jsonwebtoken')
const Users = db.users;
/**
 * 登录
 * @route POST /api/public/v1/login
 * @group 登录 - login
 * @param {string} username - 请输入用户名
 * @param {string} password - 请输入密码
 * @returns {object} 200 - token
 * @returns {object} 500 - 登录失败错误
 * @returns {Error}  default - Unexpected error
 */
router.post("/login", function (req,res){
    const pm = req.body;
    // 请求验证
    if (!pm.username)  return res.sendResult({data: '', code: 500, message: "用户名不能为空！"})

    if (!pm.password)  return res.sendResult({data: '', code: 500, message: "密码不能为空！"})

    //登录逻辑
    Users.findOne({where:{username:pm.username,password:aes.en(pm.password)}}).then(data => {
        if (data.id){
           // 生成token
           let token = 'Bearer ' + jwt.sign(
                {
                    username:pm.username,
                    password:pm.password,
                    admin: true
                },
                'secret12345',
                {
                    expiresIn: 3600 * 24 * 3
                }
            )
            let userInfo = {username: data.username,nickName:data.nickName}
            res.sendResultAto({userInfo,token},200,'登录成功')
        }
    }).catch(err => {
        logger.error(JSON.stringify(err))
        res.sendResult({data:err,code:401,message:'用户名或密码错误！'})
    })

});

module.exports = router;
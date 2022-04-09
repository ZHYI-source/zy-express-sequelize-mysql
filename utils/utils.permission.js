/**
 * @author zhouyi
 * @date 2022/4/10 0:05
 * @dec:权限
 */
const expressJwt = require('express-jwt')
const jwt = require('jsonwebtoken')

exports.d = function (app, level) {
    expressJwt({
        secret: 'secret12345'  // 签名的密钥 或 PublicKey
    }).unless({
        path: ['/login', '/signup']  // 指定路径不经过 Token 解析
    })
};
// 注意默认情况 Token 必须以 Bearer+空格 开头
exports.token = 'Bearer ' + jwt.sign(
    {
        _id: '123',
        admin: true
    },
    'secret12345',
    {
        expiresIn: 3600 * 24 * 3
    }
)
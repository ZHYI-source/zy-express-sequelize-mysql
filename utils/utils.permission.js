const expressJwt = require('express-jwt')
/**
 * token验证函数
 *
 * @param  {[type]}   req  请求对象
 * @param  {[type]}   res  响应对象
 * @param  {Function} next 传递事件函数
 */
exports.tokenAuth = expressJwt({
    secret: process.env["SIGN_KEY"],
    algorithms: ['HS256'],
    credentialsRequired: true, //对没有携带token的 接口也抛出错误
    getToken: function fromHeaderOrQuerystring(req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1]
        } else if (req.query && req.query.token) {
            return req.query.token
        }
        return null
    }
})


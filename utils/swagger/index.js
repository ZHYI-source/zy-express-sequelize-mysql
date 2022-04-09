/**
 *@author ZY
 *@date 2022/4/9 21:00
 *@Description: 配置swagger
 */

const options = {
    swaggerDefinition: {
        info: {
            title: 'zy-express-sequelize-mysql',
            version: '1.0.0',
            description: `书中枫叶’接口api`
        },
        host: `${process.env.DEV_URL}:${process.env.DEV_PORT}`,
        basePath: '/',
        produces: ['application/json', 'application/xml'],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: ''
            }
        }
    },
    route: {
        url: '/swagger',
        docs: '/swagger.json' //swagger文件 api
    },
    basedir: __dirname, //app absolute path
    files: ['../../routes/api/private/*.js'] //在那个文件夹下面收集注释
}

module.exports = options

//模型创建 https://www.sequelize.com.cn/core-concepts/model-basics#%E5%AD%97%E7%AC%A6%E4%B8%B2

const {aes} = require('../utils/utils.crypto')

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        username: {
            type: Sequelize.STRING,
            notNull: true,
            notEmpty: true,
        },
        password: {
            type: Sequelize.STRING,
            notEmpty: true,
            set(value) {
                // 在数据库中以明文形式存储密码是很糟糕的.
                // 使用适当的aes对称加密更好.
                this.setDataValue('password', aes.en(value));
            }
        },
        nickName: {
            type: Sequelize.STRING,
            defaultValue: "John Doe"
        },
        verificationCode: {
            type: Sequelize.INTEGER
        },
    });

    return Users;
};
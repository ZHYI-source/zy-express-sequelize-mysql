//模型创建 https://www.sequelize.com.cn/core-concepts/model-basics#%E5%AD%97%E7%AC%A6%E4%B8%B2
module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        nickName: {
            type: Sequelize.STRING,
            defaultValue: "John Doe"
        },
        verificationCode: {
            type: Sequelize.INTEGER
        }

    });

    return Users;
};
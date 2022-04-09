/**
 *@author ZY
 *@date 2022/4/9 13:59
 *@Description:公共查询方法
 */
const utilsTools = require("../utils/utils.tools");
const logger = require("../utils/utils.logger").logger();

//整理统一返回格式
function resExtra(data, code = 200, message = '操作成功！') {
    return {data, code, message}
}

//查询列表条件处理
function queryConditions(conditions) {
    return {
        where: utilsTools.deleteNullObj(conditions.params),
        limit: parseInt(conditions.limit),
        offset: conditions.limit * (conditions.offset - 1),
        order: [[conditions.sort.prop || 'createdAt', conditions.sort.order || 'asc']] //默认按插入时间进行升序
    }
}

const sqlOpt = {
    //查询数据总条数
    count: (model, conditions, cb) => {
        if (!model) return cb(resExtra('', 500, '模型不存在'));
        model.findAndCountAll(queryConditions(conditions)).then(data => {
            cb(resExtra(data.count))
        }).catch(err => {
            logger.error(JSON.stringify(err))
            cb(resExtra('', 500, '查询条数失败'))
        })
    },
    //查询所有数据
    list: (model, conditions, cb) => {
        /*查询条件格式
        conditions = {
            params: {
                title: ''
            },
            limit: 20,
            offset: 0,
            sort: {
                prop:'createdAt',
                order:'desc / asc：升序',
            }
        }*/
        if (!model) return cb(resExtra('', 500, '模型不存在'));

        model.findAndCountAll(queryConditions(conditions)).then(countAll => {
            model.findAll(queryConditions(conditions)).then(data => {
                cb(resExtra({data, count: countAll.count}))
            }).catch(err => {
                logger.error(JSON.stringify(err))
                cb(resExtra('', 500, '查询失败'))
            })
        }).catch(err => {
            cb(resExtra('', 500, '查询失败'))
        })

    },
    //查询单条数据 查询第一个条目的数据
    findOne: (model, conditions, cb) => {
        if (!model) return cb(resExtra('', 500, '模型不存在'));
        /* 查询一条数据 参数格式
        conditions:{
             params: {
                 title: ''
             }
         }*/
        if (!conditions.params) return cb(resExtra('', 500, '查询条件为空！'));
        model.findOne(queryConditions(conditions)).then(data => {
            cb(resExtra(data))
        }).catch(err => {
            logger.error(JSON.stringify(err))
            cb(resExtra('', 500, '查询失败'))
        })
    }

}
module.exports = sqlOpt

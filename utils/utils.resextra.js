// 添加统一的返回结果方法
module.exports = function(req, res, next){
	res.sendResult = function(obj) {
		var fmt = req.query.fmt ? req.query.fmt : "rest";
		if(fmt == "rest") {
			res.json(
			{
				"data" : obj.data,
				"meta" : {
					"msg" 		: obj.message,
					"status" 	: obj.code
				}
			});
		}
	};
	next();
}

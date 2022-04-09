var express = require('express');
var router = express.Router();
var path = require("path");

var fs = require('fs');

var multer = require('multer');
// 临时上传目录
var upload = multer({dest: 'uploads_files'});

var baseURL = require('../../../config/upload.config').baseURL;

// 提供文件上传服务
router.post("/", upload.single('file'), function (req, res, next) {
    var fileExtArray = req.file.originalname.split(".");
    var ext = fileExtArray[fileExtArray.length - 1];
    var targetPath = req.file.destination + '/' + req.file.filename + "." + ext;
    var imgName = req.file.filename + "." + ext;
    var mimetype = req.file.mimetype;
    var mineTypeMap = ['text/html', 'text/xml', 'text/plain',]
    var resUrl = baseURL + '/api/public/v1/getFiles' + '?id=' + imgName + '&&mimetype=' + mimetype
    var resUrlFile = baseURL + '/api/public/v1/getFiles' + '?id=' + imgName + '&&mimetype=' + mimetype + '&&charset=utf-8'
    // console.log(req.file)
    fs.rename(path.join(process.cwd(), "/" + req.file.path), path.join(process.cwd(), targetPath), function (err) {
        if (err) {
            return res.sendResult({data: null, code: 400, message: '上传文件失败'})
        }
        return res.sendResult({
            data: {
                "tmp_path": targetPath,
                "url": mineTypeMap.includes(mimetype) ? resUrlFile : resUrl
            }, code: 200, message: '上传成功'
        })
    })
});

module.exports = router;

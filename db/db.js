/**
 * Created by Administrator on 2015/4/3.
 */
var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/blog");
module.exports = mongoose;

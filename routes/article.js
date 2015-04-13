var express = require('express');
var Article = require('../model/article');
var DateUtil = require('../util/DateUtil');
var router = express.Router();

router.get('/add', function(req, res, next) {
  res.render('article/add',{
    title:"发表文章",
    cmd:'add',
    article:{}
  });
});
router.post('/add', function(req, res, next) {
  var user = req.session.user;
  var ts = DateUtil.getTime();
  var newArticle = new  Article({
    userId:user._id,
    title:req.body.title,
    content:req.body.content,
    createTime:ts,
    updateTime:ts
  });
  console.log(req.body.title);
  newArticle.save(function(err){
    if(err){
      return res.redirect('back');
    }
    res.redirect('/');
  })
});
router.get('/list/:pageNum/:pageSize', function(req, res, next) {
  var pageNum = req.params.pageNum && req.params.pageNum>0?parseInt(req.params.pageNum):1;
  var pageSize = req.params.pageSize &&req.params.pageSize>0?parseInt(req.params.pageSize):3;
  var query = {};
  var searchBtn = req.query.searchBtn;
  if(searchBtn){
    req.session.keyword = req.query.keyword;
  }

  if(req.session.keyword){
    var pattern = new RegExp(req.session.keyword,"i");
    query['title'] =pattern;
  }
  Article.pageQuery(query,{pageNum:pageNum,pageSize:pageSize},function(err,count,articles){
    if(err)
      next(err);
    else{
      var totalPage = Math.ceil(count/pageSize);
      res.render('index',{
        title:"exblog-博文",
        pageNum:pageNum,
        pageSize:pageSize,
        totalPage:totalPage,
        articles:articles
      });
    }
  });
});

module.exports = router;

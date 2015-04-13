var express = require('express');
var User = require('../model/User');
var router = express.Router();
var crypto = require('crypto');

router.get('/add', function(req, res, next) {
  res.render('users/login',{ title: 'ExBlog-登录' });
});
router.get('/reg', function(req, res, next) {
  res.render('users/reg',{ title: 'ExBlog-注册' });
});
router.post('/add', function(req, res, next) {
  var password = crypto.createHash('md5').update(req.body.password).digest('hex');
  User.get(req.body.username,function(err,user){
    if(err){
      req.flash('error','密码输入错误');
      return res.redirect('back');
    }else {
      if(user){
        if(user.password!=password){
          req.flash('error','密码输入错误');
          return res.redirect('back');
        }else{
          req.session.user = user;
          res.redirect('/');
        }
      }else{
        req.flash('error','密码输入错误');
        return res.redirect('back');
      }
    }
  })
});
router.post('/reg', function(req, res, next) {
  var username = req.body.username,
    email = req.body.email,
    password = req.body.password,
    password_repeat = req.body['password_repeat'];
  var md5 = crypto.createHash('md5');
  password = md5.update(password).digest('hex');
  var newUser = new User({
    username:username,
    password:password,
    email:req.body.email
  });
  newUser.save(function(err,user){
    if(err){
      req.flash('error','注册失败');
      return res.redirect('back');
    }else{
      req.session.user = user;
      res.redirect('/');
    }
  })
});
router.get('/logout', function(req, res, next) {
  req.session.user = null;
  res.redirect('/');
});
module.exports = router;

$(function() {
  $('#loginsubmit').submit(function(){
    var username = $('#loginUsername1').val();
    var psd = $('#loginPassword1').val();
    if(username&&psd){
      return true;
    }
    else{
      if (!username) {
        $('P').eq(0).html("请输入名称");
        $('P').eq(0).attr("class", "p alert-danger");
      }
      if (!psd) {
        $('P').eq(1).html("请输入密码");
        $('P').eq(1).attr("class", "p alert-danger");
      }
      $('#myadd').attr('data-toggle', 'modal');
      return false;
    }

  });
  $('#regsubmit').submit(function(){
    var user = $('#regUsername').val();
    var  email =  $('#regEmail').val();
    var psd = $('#regPassword').val();
    var re_psd =$('#regPassword2').val();
    if(user&&psd&&email&&re_psd){
      return true;
    }
    else{
      if (!user) {
        $('P').eq(2).html("请输入名称");
        $('P').eq(2).attr("class", "p alert-danger");
      }
      if (!email) {
        $('P').eq(3).html("请输入邮箱");
        $('P').eq(3).attr("class", "p alert-danger");
      }
      if (!psd) {
        $('P').eq(4).html("请输入密码");
        $('P').eq(4).attr("class", "p alert-danger");
      }
      if (!re_psd) {
        $('P').eq(5).html("请输入确认密码");
        $('P').eq(5).attr("class", "p alert-danger");
      }
      $('#myreg').attr('data-toggle', 'modal');
      return false;
    }

  });
  $('#loginUsername1').blur(function() {
    var username = $('#loginUsername1').val();
    if(username){
      $('P').eq(0).html("用户名输入正确");
      $('P').eq(0).attr("class", "p alert-success");
    }else{
        $('P').eq(0).html("用户名不为空");
        $('P').eq(0).attr("class", "p alert-danger");
    }
  });
  $('#loginPassword1').blur(function() {
    var username = $('#loginPassword1').val();
    if(username){
      $('P').eq(1).html("密码输入正确");
      $('P').eq(1).attr("class", "p alert-success");
    }else{
      $('P').eq(1).html("密码不为空");
      $('P').eq(1).attr("class", "p alert-danger");
    }
  });
  $('#regUsername').blur(function() {
    var username = $('#regUsername').val();
    if(username){
      $('P').eq(2).html("用户名输入正确");
      $('P').eq(2).attr("class", "p alert-success");
    }else{
      $('P').eq(2).html("用户名不为空");
      $('P').eq(2).attr("class", "p alert-danger");
    }
  });
  $('#regEmail').blur(function() {
    var username = $('#regEmail').val();
    if(username){
      $('P').eq(3).html("邮箱输入正确");
      $('P').eq(3).attr("class", "p alert-success");
    }else{
      $('P').eq(3).html("邮箱不为空");
      $('P').eq(3).attr("class", "p alert-danger");
    }
  });
  $('#regPassword').blur(function() {
    var username = $('#regPassword').val();
    if(username){
      $('P').eq(4).html("密码输入正确");
      $('P').eq(4).attr("class", "p alert-success");
    }else{
      $('P').eq(4).html("密码不为空");
      $('P').eq(4).attr("class", "p alert-danger");
    }
  });
  $('#regPassword2').blur(function() {
    var username = $('#regPassword2').val();
    if(username!=$('#regPassword').val()){
      $('P').eq(5).html("两次密码不一样");
      $('P').eq(5).attr("class", "p alert-danger");
    }else{
      $('P').eq(5).html("密码输入正确");
      $('P').eq(5).attr("class", "p alert-success");
    }
  });

})
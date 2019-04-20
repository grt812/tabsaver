$(function(){
  window.onbeforeunload = function(){return true;};
  $("#title").click(function(){
    $("body").css("background-color","rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
    $(this).css("color","rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
  });
});

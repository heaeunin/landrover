$(document).ready(function(){
  //서브메뉴 슬라이드다운
  $('.gnb_menu li').mouseenter(function(){
    $('.sub').stop().slideDown();
  });

  $('.gnb_menu li').mouseleave(function(){
    $('.sub').stop().slideUp();
  });

  //슬라이드 배너 페이드인 페이드아웃
  $('.slide-banner li').eq(0).siblings().hide();

  var slideI = 0;
  setInterval(function(){
    if(slideI < 2){
      slideI++;
    }else{
      slideI = 0;
    }
    $('.slide-banner li').eq(slideI).siblings().fadeOut(500);
    $('.slide-banner li').eq(slideI).fadeIn(500);
  }, 3000);

  

}); //end
// GESCHREVEN DOOR JOCHEN SUNAERT (mezelf)
// gebruik gemaakt door jQuery!

var menuGesloten = true;
var menuGesloten2 = true;

$('.hamburger').click(
  function () {

    if (menuGesloten) {
        $("nav").css('margin-top', '0px');

       $(".hamburger div:nth-child(2)").css('background-color', 'transparent');
       $(".hamburger div:nth-child(1)").css('transform', 'rotate(-45deg)');
       $(".hamburger div:nth-child(3)").css('margin-top', '-17px');
       $(".hamburger div:nth-child(3)").css('width', '30px');
       $(".hamburger div:nth-child(3)").css('transform', 'rotate(45deg)');
       menuGesloten = false;


    } else{
        $("nav").css('margin-top', '-100px');
        $(".hamburger div:nth-child(3)").css('margin-top', '0px');
        $(".hamburger div:nth-child(2)").css('background-color', '#FF4C29');
        $(".hamburger div:nth-child(1)").css('transform', 'rotate(0deg)');
        $(".hamburger div:nth-child(3)").css('transform', 'rotate(0deg)');
       
        menuGesloten = true;

    }
  });

    $('.hamburger2').click(
        function () {
      
          if (menuGesloten2) {
            $(".mobilefixed").css('position', 'fixed');
            $(".mobilefixed").css('margin-left', '0px');
            $(".hamburger2").css('z-index', '10000');
            $("body").css('overflow', 'hidden');

            $(" .hamburger2 > div> div:nth-child(1)").css('transform', 'rotate(45deg)');
            $(" .hamburger2 > div> div:nth-child(1)").css('margin-bottom', '-11px');
            $(" .hamburger2 > div> div:nth-child(1)").css('width', '30px');
            $(" .hamburger2 > div> div:nth-child(2)").css('background-color', 'transparent');
            $(" .hamburger2 > div> div:nth-child(3)").css('transform', 'rotate(-45deg)');


             menuGesloten2 = false;
          } else{
            $("body").css('overflow', 'scroll');
            $(".mobilefixed").css('margin-left', '1000px');
            $(".hamburger2").css('z-index', '0');
            
            $(" .hamburger2 > div> div:nth-child(1)").css('transform', 'rotate(0deg)');
            $(" .hamburger2 > div> div:nth-child(1)").css('margin-bottom', '5px');
            $(" .hamburger2 > div> div:nth-child(2)").css('background-color', '#FF4C29');
            $(" .hamburger2 > div> div:nth-child(3)").css('transform', 'rotate(0deg)');
              menuGesloten2 = true;
             
          }
  });

  $('#myButton').click(function(event) {
    event.preventDefault();
  $.scrollTo($('#myDiv'), 1000);
});

$(".link1").click(function() {
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 1000);
    $("body").css('overflow', 'scroll');
    $(".mobilefixed").css('margin-left', '1000px');
    $(".hamburger2").css('z-index', '0');
    
    $(" .hamburger2 > div> div:nth-child(1)").css('transform', 'rotate(0deg)');
    $(" .hamburger2 > div> div:nth-child(1)").css('margin-bottom', '5px');
    $(" .hamburger2 > div> div:nth-child(2)").css('background-color', '#FF4C29');
    $(" .hamburger2 > div> div:nth-child(3)").css('transform', 'rotate(0deg)');
    menuGesloten2 = true;
});

$(".link2").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top-75
    }, 1000);
    $("body").css('overflow', 'scroll');
    $(".mobilefixed").css('margin-left', '1000px');
    $(".hamburger2").css('z-index', '0');
    
    $(" .hamburger2 > div> div:nth-child(1)").css('transform', 'rotate(0deg)');
    $(" .hamburger2 > div> div:nth-child(1)").css('margin-bottom', '5px');
    $(" .hamburger2 > div> div:nth-child(2)").css('background-color', '#FF4C29');
    $(" .hamburger2 > div> div:nth-child(3)").css('transform', 'rotate(0deg)');
    menuGesloten2 = true;
});

$(".link3").click(function() {
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top-75
    }, 1000);
    $("body").css('overflow', 'scroll');
    $(".mobilefixed").css('margin-left', '1000px');
    $(".hamburger2").css('z-index', '0');
    
    $(" .hamburger2 > div> div:nth-child(1)").css('transform', 'rotate(0deg)');
    $(" .hamburger2 > div> div:nth-child(1)").css('margin-bottom', '5px');
    $(" .hamburger2 > div> div:nth-child(2)").css('background-color', '#FF4C29');
    $(" .hamburger2 > div> div:nth-child(3)").css('transform', 'rotate(0deg)');
    menuGesloten2 = true;
});

$(".link4").click(function() {
    $('html, body').animate({
        scrollTop: $(".cover").offset().top-75
    }, 1000);
    $("body").css('overflow', 'scroll');
    $(".mobilefixed").css('margin-left', '1000px');
    $(".hamburger2").css('z-index', '0');
    
    $(" .hamburger2 > div> div:nth-child(1)").css('transform', 'rotate(0deg)');
    $(" .hamburger2 > div> div:nth-child(1)").css('margin-bottom', '5px');
    $(" .hamburger2 > div> div:nth-child(2)").css('background-color', '#FF4C29');
    $(" .hamburger2 > div> div:nth-child(3)").css('transform', 'rotate(0deg)');
    menuGesloten2 = true;
});

$(".link5").click(function() {
    $('html, body').animate({
        scrollTop: $(".skills").offset().top-75
    }, 1000);
    $("body").css('overflow', 'scroll');
    $(".mobilefixed").css('margin-left', '1000px');
    $(".hamburger2").css('z-index', '0');
    
    $(" .hamburger2 > div> div:nth-child(1)").css('transform', 'rotate(0deg)');
    $(" .hamburger2 > div> div:nth-child(1)").css('margin-bottom', '5px');
    $(" .hamburger2 > div> div:nth-child(2)").css('background-color', '#FF4C29');
    $(" .hamburger2 > div> div:nth-child(3)").css('transform', 'rotate(0deg)');
    menuGesloten2 = true;
});

$(".link6").click(function() {
    $('html, body').animate({
        scrollTop: $(".education").offset().top-75
    }, 1000);
    $("body").css('overflow', 'scroll');
    $(".mobilefixed").css('margin-left', '1000px');
    $(".hamburger2").css('z-index', '0');
    
    $(" .hamburger2 > div> div:nth-child(1)").css('transform', 'rotate(0deg)');
    $(" .hamburger2 > div> div:nth-child(1)").css('margin-bottom', '5px');
    $(" .hamburger2 > div> div:nth-child(2)").css('background-color', '#FF4C29');
    $(" .hamburger2 > div> div:nth-child(3)").css('transform', 'rotate(0deg)');
    menuGesloten2 = true;
});

$(".link7").click(function() {
    $('html, body').animate({
        scrollTop: $(".facts").offset().top-75
    }, 1000);
    $("body").css('overflow', 'scroll');
    $(".mobilefixed").css('margin-left', '1000px');
    $(".hamburger2").css('z-index', '0');
    
    $(" .hamburger2 > div> div:nth-child(1)").css('transform', 'rotate(0deg)');
    $(" .hamburger2 > div> div:nth-child(1)").css('margin-bottom', '5px');
    $(" .hamburger2 > div> div:nth-child(2)").css('background-color', '#7A5932');
    $(" .hamburger2 > div> div:nth-child(3)").css('transform', 'rotate(0deg)');
    menuGesloten2 = true;
});

$(".link8").click(function() {
    $('html, body').animate({
        scrollTop: $(".exp").offset().top-75
    }, 1000);
    $("body").css('overflow', 'scroll');
    $(".mobilefixed").css('margin-left', '1000px');
    $(".hamburger2").css('z-index', '0');
    
    $(" .hamburger2 > div> div:nth-child(1)").css('transform', 'rotate(0deg)');
    $(" .hamburger2 > div> div:nth-child(1)").css('margin-bottom', '5px');
    $(" .hamburger2 > div> div:nth-child(2)").css('background-color', '#7A5932');
    $(" .hamburger2 > div> div:nth-child(3)").css('transform', 'rotate(0deg)');
    menuGesloten2 = true;
});

$(".link9").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top-75
        
        
    }, 1000);
    $("body").css('overflow', 'scroll');
    $(".mobilefixed").css('margin-left', '1000px');
    $(".hamburger2").css('z-index', '0');
    
    $(" .hamburger2 > div> div:nth-child(1)").css('transform', 'rotate(0deg)');
    $(" .hamburger2 > div> div:nth-child(1)").css('margin-bottom', '5px');
    $(" .hamburger2 > div> div:nth-child(2)").css('background-color', '#7A5932');
    $(" .hamburger2 > div> div:nth-child(3)").css('transform', 'rotate(0deg)');
    menuGesloten2 = true;
});



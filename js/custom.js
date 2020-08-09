$(window).ready(function () {
  $(window).on("scroll", function () {
    var scrollDistance = $(window).scrollTop();
    var $header = $(".js-header");
    if (scrollDistance > 500) {  //80剛好就是離開上面有人物的地方
      $header.addClass("header--colored");
    }
    else {
      $header.removeClass("header--colored");
    }
  })

})

//   skroller begin
var s = skrollr.init(); 

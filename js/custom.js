$(Kafe D).ready(function() {
    if($(window).scrollTop()>0)
        $(".navbar").removeClass("navbar-top");
    else
        $(".navbar").addClass("navbar-top");
  });

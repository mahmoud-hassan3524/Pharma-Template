/*global $, jquery, alert, console, window*/
$(document).ready(function () {
    
    "use strict";
    // nice scroll
                      
    $('.carousel').carousel({
  
        interval: 2000

    });
    
    // show color option when click on the gear
    
    $('.gear-check').click(function () {
        
        $('.color-option').fadeToggle();
         
    });
    
   // change theme color on click
    
    var colorLi = $('.color-option ul li');
    
    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#E426D5").end()
        .eq(2).css("backgroundColor", "#009AFF").end()
        .eq(3).css("backgroundColor", "#ffD500").end();
    
    colorLi.click(function () {
       
        $("link[href*='theme']").attr("href", $(this).attr('data-value'));
        
    });
    
    var scrollButton = $('.scroll-top');
    
    $(window).scroll(function () {
        
        console.log($(this).scrollTop());
        
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
           
        } else { scrollButton.hide();  }
    });
    
    //click on button to scroll top
    scrollButton.click(function () {
        
        $("html,body").animate({scrollTop: 0}, 600);
        
    });
    
});


// loading screen 


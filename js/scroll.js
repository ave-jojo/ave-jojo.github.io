//header out/in during scrolling
$(window).scroll(function() {
    if ($(this).scrollTop()>0){
        $('.title .frame').fadeOut(800); 
        $('.section-scroll').fadeOut(800);  
        $('small').fadeOut(800);
    }
    else {
        $('.section-scroll').fadeIn(800);
        $('.title .frame').fadeIn(800);
        $('small').fadeIn(800);
    }
});

//nav back changing		 
$(window).scroll(function() {
    if ($(this).scrollTop()> $(window).innerHeight()){
        $('.nav button').css("background-color","rgba(0, 0, 0, 0.4)");
        
        $('.nav #sub-navs button').css("padding","0 1%");
    }
    else{
		$('.nav button').css("background-color","transparent");
        $('.nav #sub-navs button').css("padding","0");
    }
});
/*
function WhoIsJojo(){
	 $('.who-is-jojo').css('display', 'block');
	 $('.tooltip').css('display', 'none');
	 $('body').css('overflow', 'hidden');
	 
	 $('body').css('top', -(document.documentElement.scrollTop) + 'px').addClass('noscroll');
	 
	 
	 
}

$('.close-btn').click(function(){
		 $('.who-is-jojo').css('display', 'none');
		 $('body').removeClass('noscroll');
		 $('body').css('overflow', 'auto');
		 $('.tooltip').css('display', 'block');
		 })
		 */
		 
		 $(document).ready(function() { 
      $(".tooltip").toggle(function() { 
        
        $(".who-is-jojo").fadeIn(); 
        
      }
	  /*,  
      
	  function() { 
        $(".who-is-jojo").fadeOut(); 
		return false; 
		}); */
    }); 
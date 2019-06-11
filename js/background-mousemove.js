$(document).ready(function() { 
 
 // Движение фона от мышки   
   
    $(document).on('mousemove', function(e) {
                var amountMovedX = 90 * ((e.pageX)/$(window).width()) - 100;
                var amountMovedY = 90 * ((e.pageY)/$(window).height()) - 100;
                $('.h_layer5').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
                $('.h_layer10').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    });   
    
    
    $(document).on('mousemove', function(e) {
            var amountMovedX = 200  * ((e.pageX + 1) / $( document ).width());
            var amountMovedY = 165 * ((e.pageY + 1) / $( window ).height());
            $('.h_layer4').css( {'margin-left': '-' + amountMovedX + 'px', 'margin-top' : '-' + amountMovedY + 'px' });
            $('.h_layer9').css( {'margin-left': '-' + amountMovedX + 'px', 'margin-top' : '-' + amountMovedY + 'px' });
    });
    
   $(document).on('mousemove', function(e) {
            var amountMovedX = 100 * ((e.pageX + 1) / $( document ).width()) - 50;
            var amountMovedY = 80 * ((e.pageY + 1) / $( window ).height()) - 50;
            $('.h_layer3').css( {'margin-left': '-' + amountMovedX + 'px', 'margin-top' : '-' + amountMovedY + 'px' });
            $('.h_layer8').css( {'margin-left': '-' + amountMovedX + 'px', 'margin-top' : '-' + amountMovedY + 'px' });
    });

});
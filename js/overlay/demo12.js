(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector('div.overlay'),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };
		s = Snap( overlay.querySelector( 'svg' ) ), 
		path = s.select( 'path' ),
		steps = overlay.getAttribute( 'data-steps' ).split(';'),
		stepsTotal = steps.length;

	function toggleOverlay() {
		
		if( classie.has( overlay, 'open' ) ) {
			
			var pos = stepsTotal-1;
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			
			
			$('.jojo2').fadeOut(30);
			$('.about-jojo .overlay-svg-white').css("display","none");
			$('.about-jojo .text').css("display","none");
			$('.about-jojo .text-gradient').css("display","none");
			$('.animation-wrapper').fadeOut(300);
            $('body').css('overflow', 'auto');
			
			var onEndTransitionFn = function( ev ) {
					classie.remove( overlay, 'close' );
					
				},
				nextStep = function( pos ) {
					pos--;
					if( pos < 0 ) return;
					path.animate( { 'path' : steps[pos] }, 60, mina.linear, function() { 
						if( pos === 0 ) {
							onEndTransitionFn();
						}
						nextStep(pos);
					} );
				};

			nextStep(pos);
		}
		else if( !classie.has( overlay, 'close' ) ) {
			var pos = 0;
			classie.add( overlay, 'open' );
			
			$('body').css('overflow', 'hidden');
			$('.jojo2').fadeIn(500);
			$('.about-jojo .overlay-svg-white').fadeIn(500);
			$('.about-jojo .text-gradient').css("display","block");
			$('.about-jojo .text').css("display","block");

			$('.animation-wrapper').fadeIn();
			
            /*$('body').css('top', -(document.documentElement.scrollTop) + 'px').addClass('noscroll');*/
			
			var nextStep = function( pos ) {
				pos++;
				if( pos > stepsTotal - 1 ) return;
				path.animate( { 'path' : steps[pos] }, 60, mina.linear, function() { nextStep(pos); } );
			};

			nextStep(pos);
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
	
	
	
})();
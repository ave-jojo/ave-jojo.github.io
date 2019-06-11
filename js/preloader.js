$(window).on('load', function () {
            $preloader = $('.loaderArea'),
              $loader = $preloader.find('.loader');
            $loader.delay(4500).fadeOut();
            $preloader.delay(4500).fadeOut('slow');
          });
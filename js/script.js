 $(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

      /* Check the location of each desired element */
      $('.onScrollAnimate').each(function (i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight() + 150;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, animate it */
        if (bottom_of_window > bottom_of_object) {

         
          $(".onScrollAnimate").addClass("rubberBand delay-2s");
        
        }

      });

    });

  });
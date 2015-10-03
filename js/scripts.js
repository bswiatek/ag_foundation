(function ($, Drupal) {

  Drupal.behaviors.ag = {
    attach: function(context, settings) {
      // Get your Yeti started.
    }
  };

    $( document ).ready(function() {
        //one Page site on homepage
        $('#fullpage').fullpage({
            scrollOverflow: true
        });

        $('#secondary-menu').removeClass('right');
    });

})(jQuery, Drupal);

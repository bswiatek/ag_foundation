(function ($, Drupal) {

    $( document ).ready(function() {
        $('#secondary-menu').removeClass('right');

        setInterval(function() {
            $(".gallery-frame li[style='display: block;'] img").click();
        },7000);

    });

})(jQuery, Drupal);

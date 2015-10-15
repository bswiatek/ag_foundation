(function ($, Drupal) {

    $( document ).ready(function() {
        $('#secondary-menu').removeClass('right');

        setInterval(function() {
            $(".gallery-frame li[style='display: block;'] img").click();
        },7000);

        $('.galleryformatter-greenarrows .overlay-inner h4').append('<a href="#" class="viewfull"></a>');
        $('.galleryformatter-greenarrows .viewfull').on( "click", function(){
           $(this).parents("li.gallery-slide").find("span.view-full").click();
        });

        $('#edit-combine').attr('placeholder', 'Wyszukaj');


        $(document).on({
            mouseenter: function () {
                    var artysta = $(this).find(".views-field-field-artysta a");
                    var tytul = $(this).find(".views-field-title span");
                    var technika = $(this).find(".views-field-field-technika div");
                    var data = $(this).find(".views-field-field-data-powstania div");
                    $(this).find("figcaption .views-field-field-artysta").append(artysta);
                    $(this).find("figcaption .views-field-title").append(tytul);
                    $(this).find("figcaption .views-field-field-technika").append(technika);
                    $(this).find("figcaption .views-field-field-data-powstania").append(data);

                $(this).find("figcaption a").on("click",function(){
                    window.location.href = $(this).attr("href");
                    return false;
                });

                $(".view-kolekcja .plusik").on("click",function(){
                    $('div.grid figure.hover').removeClass('hover');
                    $(this).parent().find("div.grid figure").addClass('hover');
                });

                $(".view-kolekcja figcaption").on("click",function(){
                    $(this).parent().find("a.colorbox").click();
                });
            }
        }, '.view-kolekcja .views-row');
    });

    $(document).ready(function() {
        var $grid = $('.view-kolekcja2 .view-content');

        $grid.shuffle({
            itemSelector: '.views-row'
        });
    });

})(jQuery, Drupal);

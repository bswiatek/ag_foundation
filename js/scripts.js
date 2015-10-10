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
              //  $(this).find('.btn-group').fadeIn();
                if($(this).find("figcaption").length < 1){
                    $(this).find("a img").wrap("<div class='grid'><figure class='effect-chico'></figure></div>");
                    var artysta = $(this).find(".views-field-field-artysta");
                    var tytul = $(this).find(".views-field-title");
                    var technika = $(this).find(".views-field-field-technika");
                    var data = $(this).find(".views-field-field-data-powstania");
                    $(this).find("a img").after("<figcaption></figcaption>");
                    $(this).find("figcaption").append(artysta,tytul,technika,data);
                }

                $(this).find("figcaption a").on("click",function(){
                    window.location.href = $(this).attr("href");
                    return false;
                })
            }
        }, '.view-kolekcja .views-row');
    });

})(jQuery, Drupal);

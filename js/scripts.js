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

        //images for small
        $(".view-slideshow .gallery-frame").append("<div class='img_for_small gallery-slide'></div>");
        pict_number = Math.floor(Math.random() * 3) + 1;
        var img_for_small = '<img src="/gfx/sg_small/'+ pict_number +'.jpg" alt="image slider" />';
        $(".view-slideshow .img_for_small").append(img_for_small);

        //pager
        $(".view-teksty-lista .pager a:contains('last')").addClass('hide');
        $(".view-teksty-lista .pager a:contains('first')").addClass('hide');
        $(".view-teksty-lista .pager a:contains('next')").addClass('next');
        $(".view-teksty-lista .pager a:contains('prev')").addClass('prev');
        $(".view-teksty-lista .pagination-centered").clone().prependTo('.view-teksty-lista');

        //cookies
        var agree_button = $("#sliding-popup .agree-button");
        $("#sliding-popup .popup-content #popup-text p").append(agree_button);

    });

    $(document).ready(function() {
        //ustawienie elementów do sotrowania
        $('.view-kolekcja2 .views-row').each(function(){
            var tytul = $(this).find(".views-field-title span").text();
            var data = $(this).find(".views-field-field-data-powstania div").text();
            $(this).attr('data-title', tytul);
            $(this).attr('data-date-created', data);

            //przygotowanie pod hover chico
            var artysta = $(this).find(".views-field-field-artysta a");
            var tytul = $(this).find(".views-field-title span");
            var technika = $(this).find(".views-field-field-technika div").text();
            var data = $(this).find(".views-field-field-data-powstania div").text();
            $(this).find("figcaption .views-field-field-artysta").append(artysta);
            $(this).find("figcaption .views-field-title").append(tytul);
            $(this).find("figcaption .views-field-field-technika").append(technika);
            $(this).find("figcaption .views-field-field-data-powstania").append(data);

            $(this).find("figcaption a").on("click",function(){
                window.location.href = $(this).attr("href");
                return false;
            });
        });

        $(".view-kolekcja2 .plusik").on("click",function(){
            $('div.grid figure.hover').removeClass('hover');
            $(this).parent().find("div.grid figure").addClass('hover');
            return false;
        });

        $(".view-kolekcja2 figcaption").on("click",function(){
            $(this).parent().find("a.colorbox").click();
        });

        $(".view-kolekcja2 .sort-option-head").on("click",function(){
            $(this).next('.sort-options').show();
            $(this).addClass('active');
            return false;
        });
        $(".view-kolekcja2 .search-box input").on("click",function(){
            $(this).addClass('active');
        });


        //Opcje Shuffle.js
        setTimeout(function(){
            var $grid = $('.view-kolekcja2 .view-content');

            $grid.shuffle({
                itemSelector: '.views-row',
                gutterWidth: 10
            });

            // Sorting options
            $('.sort-option').on('click', function() {
                var sort = $(this).attr('type'),
                    opts = {};
                // We're given the element wrapped in jQuery
                if ( sort === 'sort-year-asc' ) {
                    opts = {
                        by: function($el) {
                            return $el.data('date-created');
                        }
                    };
                } else if ( sort === 'sort-year-desc' ) {
                    opts = {
                        reverse: true,
                        by: function($el) {
                            return $el.data('date-created');
                        }
                    };
                } else if ( sort === 'sort-title-asc' ) {
                    opts = {
                        by: function($el) {
                            return $el.data('title').toLowerCase();
                        }
                    };
                } else if ( sort === 'sort-title-desc' ) {
                    opts = {
                        reverse: true,
                        by: function($el) {
                            return $el.data('title').toLowerCase();
                        }
                    };
                }
                // Filter elements
                $grid.shuffle('sort', opts);
            });

            // Advanced filtering
            $('.js-shuffle-search').on('keyup change', function() {
                var val = this.value.toLowerCase();
                $grid.shuffle('shuffle', function($el, shuffle) {
                    var prepText = $.trim($el.find('.views-field-title').text()) + ' ' + $.trim($el.find('.views-field-field-artysta').text()) + ' ' + $.trim($el.find('.views-field-field-technika div').text()) + ' ' + $.trim($el.find('.views-field-field-data-powstania div').text());
                    var text = $.trim( prepText ).toLowerCase();
                    return text.indexOf(val) !== -1;
                });
            });
        }, 700);
    });

})(jQuery, Drupal);

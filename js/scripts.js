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
                $( this ).attr( "src", "/gfx/svg/seemore_hover.svg" );
            },

            mouseleave: function () {
                $( this ).attr( "src", "/gfx/svg/seemore.svg" );
            }
        }, '.chico-show-more img');

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

        //lang switcher
        var lang_switcher = $('.language-switcher-locale-url');
        $('nav.top-bar').append(lang_switcher);
        var current_short_lang=$('.language-switcher-locale-url a.active').attr('xml:lang');
        var current_long_lang=$('.language-switcher-locale-url a.active').html();
        var win_width = $( window ).width();
        if( win_width > 940 ){
            $('.language-switcher-locale-url a.active').text(current_short_lang);
        }
        $('.language-switcher-locale-url').on({
            'mouseenter':function(){
                $('.language-switcher-locale-url a.active').text(current_long_lang);
            },'mouseleave':function(){
                win_width = $( window ).width();
                if( win_width > 940 ){
                    $('.language-switcher-locale-url a.active').text(current_short_lang);
                }
            }
        });
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
            $(".view-kolekcja2 .plusik").removeClass('active');
            $(this).addClass('active');
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
            var $grid = $('.view-kolekcja2 .view-content');

            $grid.shuffle({
                itemSelector: '.views-row',
                gutterWidth: 10
            });

            $(".view-kolekcja2 figure a > img").one("load", function() {
                $(".sorting-box a[type=sort-title-asc]").click();
            }).each(function() {
                if(this.complete) $(this).load();
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
    });

})(jQuery, Drupal);

;(function($){
    "use strict";

    $(document).ready(function(){

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/  
        $(document).on('click','.navbar-area .navbar-nav li.menu-item-has-children>a',function(e){
            e.preventDefault();
        }) 
        

        $(".togglebar").on('click', function(){
            $(".togglebar").toggleClass('active');
            $(".navbar-collapse").toggleClass('active');
        })

        /***banner-slider***/
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            focusOnSelect: true,
        });

        var $container = $('.masonry-container');
        $container.imagesLoaded( function () {
            $container.masonry({
                columnWidth: '.card',
                itemSelector: '.card'
            });
        });
        
        //Reinitialize masonry inside each panel after the relative tab link is clicked - 
        $('a[data-toggle=tab]').each(function () {
            var $this = $(this);
    
            $this.on('shown.bs.tab', function () {
            
                $container.imagesLoaded( function () {
                    $container.masonry({
                        columnWidth: '.card',
                        itemSelector: '.card'
                    });
                });
    
            }); //end shown
        });  //end each
        

        /*---------------------------
            Testimonial carousel
        ---------------------------*/
        
        $(".testimonial-slide").owlCarousel({
            loop: true,
            items: 2,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 1500,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                }
            }
        });

        /*---------------------------
            instagram carousel
        ---------------------------*/
        $(".instagram-slider").owlCarousel({
            loop: true,
            items: 8,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:3,
                },
                600:{
                    items:5,
                },
                1200:{
                    items:8,
                }
            }
        });

        /*---------------------------
            instagram carousel
        ---------------------------*/
        $(".movie-show-slider").owlCarousel({
            loop: true,
            items: 4,
            nav: false,
            dots: false,
            margin: 20,
            smartSpeed: 1500,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1200:{
                    items:4,
                }
            }
        });

        /*---------------------------
            instagram carousel
        ---------------------------*/
        $(".movie-show-slider-2").owlCarousel({
            loop: true,
            items: 4,
            nav: true,
            dots: true,
            margin: 20,
            smartSpeed: 1500,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1200:{
                    items:4,
                }
            }
        });

        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        /*------------------------------------------------
            Magnific JS
        ------------------------------------------------*/
        $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'iframe',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/UAJyJt_lnKA'
                    }
                }
            }
        });

        /**---------------------------------------
          Progress BAR
        ----------------------------------------*/
        function td_Progress() {
            var progress = $('.progress-rate');
            var len = progress.length;
             for (var i = 0; i < len; i++) {
                var progressId = '#' + progress[i].id;
                var dataValue = $(progressId).attr('data-value');
                $(progressId).css({'width':dataValue+'%'});
             }
         }
         var progressRateClass = $('#progress-running-1');
          if ((progressRateClass).length) {
             td_Progress();
         }
         $('.counting').each(function() {
             var $this = $(this),
             countTo = $this.attr('data-count');
           
             $({ countNum: $this.text()}).animate({
                 countNum: countTo
             },
 
             {
                 duration: 2000,
                 easing:'linear',
                 step: function() {
                     $this.text(Math.floor(this.countNum));
                 },
                 complete: function() {
                     $this.text(this.countNum);
                 }
             });  
         });

         /*------------------
            back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
         /*------------------------------
            counter section activation
        -------------------------------*/
        var counternumber = $('.count-num');
        counternumber.counterUp({
            delay: 20,
            time: 3000
        });

        /* -------------------------------------------------------------
           gallery isotope
        ------------------------------------------------------------- */
        var $galleryFilterArea = $('.gallery-isotope'),
            $galleryFilterMenu = $('.gallery-isotope-btn');
        /*Filter*/
        $galleryFilterMenu.on( 'click', 'button, a', function() {
            var $this = $(this),
            $filterValue = $this.attr('data-filter');
            $galleryFilterMenu.find('button, a').removeClass('active');
            $this.addClass('active');
            $galleryFilterArea.isotope({ filter: $filterValue });
        });
        /*Grid*/
        $galleryFilterArea.each(function(){
            var $this = $(this),
            $galleryFilterItem = '.gallery-item';
            $this.isotope({
                itemSelector: $galleryFilterItem,
                percentPosition: true,
                masonry: {
                    columnWidth: '.gallery-sizer',
                }
            });
        });

        /*-------------------------------
            Portfolio filter 
        ---------------------------------*/
        var $Container = $('.portfolio-masonry');
        if ($Container.length > 0) {
            $('.portfolio-masonry').imagesLoaded(function () {
                var festivarMasonry = $Container.isotope({
                    itemSelector: '.masonry-item', // use a separate class for itemSelector, other than .col-
                    masonry: {
                        gutter: 0
                      }
                });
                $(document).on('click', '.portfolio-menu li', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
            $(document).on('click','.portfolio-menu li' , function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        }
        
        
        /*----------------------
            Search Popup
        -----------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
        bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click','#search',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
        bodyOvrelay.addClass('active');
        });

        

    });

    $(window).on('scroll', function () {

        /* --------------------------------------------------------
            36. Header menu sticky
        -------------------------------------------------------- */
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".header-area").removeClass("sticky-active");
        } else {
            $(".header-area").addClass("sticky-active");
        }
        
        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
       
    });
           

    $(window).on('load',function(){

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click','.cancel-preloader a',function(e){
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });


})(jQuery);
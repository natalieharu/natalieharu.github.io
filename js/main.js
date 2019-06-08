$(function (){
    $('.slick').slick({
         dots: true,
        infinite: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
      });
    
      
});


$('.btn-bell').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

$('.menu-hamburger').click(function(){
          $('.menu-collapse').toggleClass('d-none').css('order','1');
        $('.menu').toggleClass('menu-open');
      });

$('.menu-open li a').click(function(){
          $('.menu-collapse').toggleClass('d-none').css('order','1');
        $('.menu').toggleClass('menu-open');
      });

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
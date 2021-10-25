$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true
    });
    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });
});


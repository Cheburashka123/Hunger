$(document).ready(function () {
    $('.burger, .menu__item').click(function (event) {
        $('.burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,

    });


});

//< !--КНОПКА ВЕРХ-- >


$(function () {

    $('.button__up').click(function () {

        $("html, body").animate({
            scrollTop: 0
        }, 500);
    })
})
$(window).scroll(function () {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop() > 400) {

        $('.button__up').fadeIn();
    }

    else {
        $('.button__up').fadeOut();
    }
});



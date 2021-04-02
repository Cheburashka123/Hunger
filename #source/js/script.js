$(document).ready(function () {
    $('.burger, .menu__item').click(function (event) {
        $('.burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});




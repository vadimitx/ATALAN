// инкапсулированный модуль по работе с слайдером
// при подключении вызывается самовызывающаяся функция (function(){})()
// применяется чтобы не возникало конфликтов в глобальной области видимости и для
// чистоты внешнего js
(function () {
    // создадим 2 слайдера - изображения и текст под изображениями
    // свяжем их через свойства asNavFor

    // создаем слайдер изображений
    $('.slider').slick({
        asNavFor: '.slide-title',
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        arrows: false,
    });

    // создаем слайдер текста под изображениями
    $('.slide-title').slick({
        asNavFor: '.slider',
        draggable: false,
        centerPadding: '0px',
        slidesToShow: 1,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>', speed: 200,
        fade: true,
    });
})();
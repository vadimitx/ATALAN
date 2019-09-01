(function () {
    // обработка rangesliders
    // функция создающая rangesliders, устанавливающая обработчики
    function rs(classPart){
        var $rangeslider = $('.'+classPart+'-block input[type="range"]'); // слайдер с соответствующим классом
        var $amount = $('.'+classPart+'-block .upper input'); // инпут с соответствующим классом

        $rangeslider
            .rangeslider({
                polyfill: false,
                onInit: function() {
                    // при загрузке rangeslider устанавливаем значение в инпуте = значению слайдера
                    $amount.attr('value', this.value);
                },
            })
            .on('input', function() {
                // при изменении слайдера меняем значение в инпуте
                $amount[0].value = this.value;
            });

        $amount.on('input', function() {
            // при изменении инпута меняем слайдер
            $rangeslider.val(this.value).change();
        });
    }

    // создаем массив с названиями классов
    var rangeClasses = ['loan', 'term', 'amount'];
    // для каждого элемента массива классов запустим функцию rs
    // и передадим в нее название из текущего элемента массива
    rangeClasses.forEach(function (el) {
        rs(el);
    });
})();
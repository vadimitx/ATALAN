// данные для графика по умолчанию
var data = {
    labels: [1, 2, 3, 4, 5, 6],
    series: [
        [6, 3, 2, 5, 3, 2]
    ]
};
var txt = 'TL';// значение текста графика по умолчанию
CustomChart.create(data, txt);// создаем график
CustomTab.setTxt(txt);// устанавливаем текст графика

// Initialize a new plugin instance for all
// e.g. $('input[type="range"]') elements.
$('input[type="range"]').rangeslider({
    polyfill: false,
    onInit: function() {
        console.log(this);
        var elClass = this.$element.attr('class');
        // console.log(this.$element.siblings());
        // this.value = $('input.' + elClass).attr('value');
        $('input.' + elClass).attr('value',this.value);
    },
    onSlide: function(position, value) {
        var elClass = this.$element.attr('class');
        $('input.' + elClass).attr('value',value);
    },
});

// // Destroy all plugin instances created from the
// // e.g. $('input[type="range"]') elements.
// $('input[type="range"]').rangeslider('destroy');
//
// // Update all rangeslider instances for all
// // e.g. $('input[type="range"]') elements.
// // Usefull if you changed some attributes e.g. `min` or `max` etc.
// $('input[type="range"]').rangeslider('update', true);




// модуль по работе с ГРАФИКОМ
// при подключении создается объект - namespace
// применяется чтобы не возникало конфликтов в глобальной области видимости и для
// простоты манипуляций методами во внешнем js

// создаем объект CustomChart
var CustomChart = {
    // метод create принимает данные для создания графика в объекте data
    // и строку str для использования при создании тултипов
    create: function (data, str) {

        // опции для построения графика
        var options = {
            width: '100%',
            height: '200px',
            low: 0,
            high: 7,
            showArea: true,
            fullWidth: true,
            chartPadding: {
                right: 0,
                left: -40,
                // bottom: -30
            },
            axisX: {
                labelInterpolationFnc: function (value, index) {
                    return index % 2 === 0 ? value : null;
                }
            }
        };

        var chart = new Chartist.Line('.ct-chart', data, options);// создаем график

        // после создания графика создаем тултип
        chart.on('created', function (ctx) {
            var tt = $('#tooltip'); // запишем тултип в переменную tt
            // при наведении на точки на графике
            $('.ct-point').on('mouseover', function (e) {
                // возьмем значение атрибута value текущей точки и запишем его в текст тултипа прибавив строку str
                tt.html($(this).attr('ct:value') + ' ' + str);
                // возьмем значение атрибута x1, конвертируем его в число, вычтем 50(подогнано)
                // и установим полученную цифру в качестве левого отступа у тултипа
                tt.css("left", parseInt($(this).attr('x1')) - 50);
                // возьмем значение атрибута y1, конвертируем его в число, вычтем 30(подогнано)
                // и установим полученную цифру в качестве отступа сверху у тултипа
                tt.css("top", parseInt($(this).attr('y1')) - 30);
                // отобразим тултип
                tt.css("display", 'block');
            });

            $('.ct-point').on('mouseout', function () {
                // tt.css("display", 'none'); // если нужно, можно скрывать тултип после того как мышка уводится в сторону
            });
        });
    }
};
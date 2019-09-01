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


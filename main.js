// CHART
var data = {
    labels: [1, 2, 3, 4, 5, 6],
    series: [
        [2, 3, 2, 5, 3, 2]
    ]
};

createChart(data, ' USD');

function createChart(data, str) {
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

    var chart = new Chartist.Line('.ct-chart', data, options);

    chart.on('created', function (ctx) {
        var tt = $('#tooltip');
        $('.ct-point').on('mouseover', function (e) {
            tt.html($(this).attr('ct:value') + ' ' + str);

            tt.css("left", parseInt($(this).attr('x1')) - 50);
            tt.css("top", parseInt($(this).attr('y1')) - 30);
            tt.css("display", 'block');
        });

        $('.ct-point').on('mouseout', function () {
            // tt.css("display", 'none');
        });
    });
}
// CHART END

//tabs-chart
$('#tabs-chart li a').click(tabCb);
function tabCb(){
    var t = $(this);
    // var sibl = $(this).parent().siblings();
    // console.log(sibl);
    // sibl.$('a').removeClass('active');
    var collectionA = $('#tabs-chart li a');
    for (var i = 0; i < collectionA.length; i++) {
        collectionA[i].removeAttribute('class');
    }
    t.addClass('active');

    var txt = this.innerText;
    $('#tooltip').css('display', 'none');
    switch (txt) {

        case 'TL':
            data.series = [
                [2, 3, 2, 5, 3, 2]
            ];
            break;
        case 'EURO':
            data.series = [
                [4, 2, 5, 3, 5, 6]
            ];
            break;
        default:
            data.series = [
                [5, 2, 6, 2, 5, 3]
            ];
            break;
    }
    createChart(data, txt);
}
// tabs-chart END

// tabs-bottom
// $('#tabs li:first a').addClass('active');
$('.container').hide();
$('.container:first').show();

$('#tabs li a').click(function(){
    var t = $(this).attr('id');
    if(!$(this).hasClass('active')){
        $('#tabs li a').removeClass('active');
        $(this).addClass('active');

        $('.container').hide();
        $('#'+ t + 'C').fadeIn('slow');
    }
});
// tabs-bottom end


// SLIDER
$('.slider').slick({
    asNavFor: '.slide-title',
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1,
    arrows: false,
});

$('.slide-title').slick({
    asNavFor: '.slider',
    draggable: false,
    centerPadding: '0px',
    slidesToShow: 1,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>', speed: 200,
    fade: true,
});
// SLIDER END

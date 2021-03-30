$(document).ready(function(){
    
    var apiKey = '6b71e45e81339efb68c7b8d995519887'
    $('form').submit(function () {
        var city = $('#city').val();
        var cityString = `${city}`

        var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityString}&appid=${apiKey}&units=metric`

        $.get(url, function (res) {
            console.log(res)
            var htmlString = `<h1>${cityString}</h1><p>Nhiệt Độ: ${res.main.temp}&#8457;</p>`
            htmlString+= `<p>Dự Báo: ${res.weather[0].description}</p><p>Tốc Độ Gió: ${res.wind.speed} km/giờ</p>`
            $('#forecast').html(htmlString);

        }, 'json');
        return false;
    })
})
$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=Chandigarh&units=metric&APPID=5f1b48e5a5ba97d627026f3c77d3ac11", function(data) {
    console.log(data);


    var icon = 
    "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = data.main.temp;
    var weather = data.weather[0].main;

    $(".icon").attr('src',icon);
    $(".weather").append(weather);

    $(".temp").append(temp);
}
);

weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?id=5236279&APPID=c88a8636d1948b12488e190a31a4a292&units=imperial',true);
weatherRequest.send();
weatherRequest.onload = function() {
    var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);
    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('current-temp').innerHTML = weatherInfo.main.temp;
    document.getElementById('current-weather').innerHTML = weatherInfo.weather[0].description;
    document.getElementById('high-temperature').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('low-temperature').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('wind-speed').innerHTML = weatherInfo.wind.speed;

var iconcode= weatherInfo.weather[0].icon;

var icon_path= "https://openweathermap.org/img/w/"+ iconcode +".png";
document.getElementById('weather_icon').src= icon_path;
}

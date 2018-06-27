weatherRequest = new XMLHttpRequest();
cityname = document.getElementById("cityname").innerHTML;
ID = 0;
switch(cityname) {
    case("Franklin City"): ID = 4759986;
        break;
    case("Greenville City"): ID = 4695066;
        break;
    case("Springfield City"): ID = 4409896;
        break;
}
ID = ID.toString();
call = 'https://api.openweathermap.org/data/2.5/weather?id='+ID+'&APPID=c88a8636d1948b12488e190a31a4a292&units=imperial';
weatherRequest.open('GET',call,true);

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

forcastcall = 'https://api.openweathermap.org/data/2.5/forecast?id='+ID+'&APPID=c88a8636d1948b12488e190a31a4a292&units=imperial';
forcastRequest = new XMLHttpRequest();
forcastRequest.open('GET',forcastcall,true);

forcastRequest.send();
forcastRequest.onload = function(){
    var forcastInfo = JSON.parse(forcastRequest.responseText);
    console.log(forcastInfo);
}

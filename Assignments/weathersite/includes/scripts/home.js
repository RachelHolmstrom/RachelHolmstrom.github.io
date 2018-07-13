var main = document.querySelector('main');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var towns = request.response;
    showCities(towns);
}
function showCities(jsonObj) {
    var cities = jsonObj['towns'];
    cities.splice(2,1)
    for (var i = 0; i < cities.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = cities[i].name;
        myPara1.textContent = cities[i].motto;
        myPara2.textContent = 'Year Founded: ' + cities[i].yearFounded;
        myPara3.textContent = 'Current Population: ' + cities[i].currentPopulation;
        myPara4.textContent = 'Average Rainfall: ' + cities[i].averageRainfall;
        myPara5.textContent = 'events:';

        var events = cities[i].events;
        for (var j = 0; j < events.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = events[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myList);

        main.appendChild(myArticle);
    }
}

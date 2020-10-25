//adding API key
var APIKey="a0aca8a89948154a4182dcecc780b513";
// all the vars that I need
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty= $("#humidity");
var currentWSpeed=$("#wind-speed");
var currentUvindex= $("#uv-index");
var sCity=[];
var city="";

// AJAX call
function currentWeather(city){
    var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
    $.ajax({
        url:queryURL,
        method:"GET", 
    }).then(function(response){
        console.log(response);
        //Setting up weather icons
        var weathericon= response.weather[0].icon;
        var iconurl="https://openweathermap.org/img/wn/"+weathericon +"@2x.png";
        //get date
        var date=new Date(response.dt*1000).toLocaleDateString();
        //Icon will change depends on the ananlysis
        $(currentCity).html(response.name +"("+date+")" + "<img src="+iconurl+">");
    
    })
}
const WeatherApiKey = "cb428076fa9fa360dc58aba6aa02afe7";
const ApiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const defaultCity = "Vadodara";

var search = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");
var WeatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const Response = await fetch(ApiURL + city + `&appid=${WeatherApiKey}`);
    var data = await Response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    switch (data.weather[0].main) {
        case "Clear":
            WeatherIcon.src = "img/clear.png";
            break;
        case "Clouds":
            WeatherIcon.src = "img/cloudy.png";
            break;
        case "Thunderstorm":
            WeatherIcon.src = "img/storm.png";
            break;
        case "Rain":
            WeatherIcon.src = "img/rain.png";
            break;
        case "Drizzle":
            WeatherIcon.src = "img/drizzle.png";
            break;
        case "Mist":
            WeatherIcon.src = "img/mist.png";
            break;
        case "Snow":
            WeatherIcon.src = "img/snow.png";
            break;
    }
}

checkWeather(defaultCity);

searchBtn.addEventListener("click", () => {
    const city = search.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        checkWeather(defaultCity);
    }
});
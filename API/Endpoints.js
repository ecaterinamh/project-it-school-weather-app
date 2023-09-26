var API_KEY = '04b9aebc946b80d9d961e3a39ab454c2';
var language = "ro"
 
function getCurrentWeatherDataUrl(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=${language}&units=metric`;
}

function getForecastEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&lang=${language}&units=metric`;
}




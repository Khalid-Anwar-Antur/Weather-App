const apiKey = "99085ef3539ec0276cf290e8bb15804d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=dhaka";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data)    
}
checkWeather()
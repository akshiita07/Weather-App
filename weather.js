
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b600b333edmsh95738b0822961cfp1ccb67jsnb7258f166b5e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

    cityCurr.innerHTML=city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloudPct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feelLike.innerHTML = response.feels_like
            humi.innerHTML = response.humidity
            minT.innerHTML = response.min_temp
            maxT.innerHTML = response.max_temp
            windSp.innerHTML = response.wind_speed
            windDeg.innerHTML = response.wind_degrees
            sunRise.innerHTML = response.sunrise
            sunSet.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeather(city.value);
})


//if not searched yet
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mohali' , options)
.then(response => response.json())
        .then((response) => {
            cloudPct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feelLike.innerHTML = response.feels_like
            humi.innerHTML = response.humidity
            minT.innerHTML = response.min_temp
            maxT.innerHTML = response.max_temp
            windSp.innerHTML = response.wind_speed
            windDeg.innerHTML = response.wind_degrees
            sunRise.innerHTML = response.sunrise
            sunSet.innerHTML = response.sunset
        })
        .catch(err => console.error(err));




fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi' , options)
.then(response => response.json())
        .then((response) => {
            delhi_cloud_pct.innerHTML= response.cloud_pct
            delhi_temp.innerHTML= response.temp
            delhi_feels_like.innerHTML= response.feels_like
            delhi_humidity.innerHTML= response.humidity
            delhi_min_temp.innerHTML= response.min_temp
            delhi_max_temp.innerHTML= response.max_temp
            delhi_wind_speed.innerHTML= response.wind_speed
            delhi_wind_degrees.innerHTML= response.wind_degrees
            delhi_sunriset.innerHTML= response.sunrise
            delhi_sunset.innerHTML= response.sunset
        })
        .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore' , options)
.then(response => response.json())
        .then((response) => {
            bang_cloud_pct.innerHTML= response.cloud_pct
            bang_temp.innerHTML= response.temp
            bang_feels_like.innerHTML= response.feels_like
            bang_humidity.innerHTML= response.humidity
            bang_min_temp.innerHTML= response.min_temp
            bang_max_temp.innerHTML= response.max_temp
            bang_wind_speed.innerHTML= response.wind_speed
            bang_wind_degrees.innerHTML= response.wind_degrees
            bang_sunriset.innerHTML= response.sunrise
            bang_sunset.innerHTML= response.sunset
        })
        .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chandigarh' , options)
.then(response => response.json())
        .then((response) => {
            chd_cloud_pct.innerHTML= response.cloud_pct
            chd_temp.innerHTML= response.temp
            chd_feels_like.innerHTML= response.feels_like
            chd_humidity.innerHTML= response.humidity
            chd_min_temp.innerHTML= response.min_temp
            chd_max_temp.innerHTML= response.max_temp
            chd_wind_speed.innerHTML= response.wind_speed
            chd_wind_degrees.innerHTML= response.wind_degrees
            chd_sunriset.innerHTML= response.sunrise
            chd_sunset.innerHTML= response.sunset
        })
        .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris' , options)
.then(response => response.json())
        .then((response) => {
            ny_cloud_pct.innerHTML= response.cloud_pct
            ny_temp.innerHTML= response.temp
            ny_feels_like.innerHTML= response.feels_like
            ny_humidity.innerHTML= response.humidity
            ny_min_temp.innerHTML= response.min_temp
            ny_max_temp.innerHTML= response.max_temp
            ny_wind_speed.innerHTML= response.wind_speed
            ny_wind_degrees.innerHTML= response.wind_degrees
            ny_sunriset.innerHTML= response.sunrise
            ny_sunset.innerHTML= response.sunset
        })
        .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Toronto' , options)
.then(response => response.json())
        .then((response) => {
            tor_cloud_pct.innerHTML= response.cloud_pct
            tor_temp.innerHTML= response.temp
            tor_feels_like.innerHTML= response.feels_like
            tor_humidity.innerHTML= response.humidity
            tor_min_temp.innerHTML= response.min_temp
            tor_max_temp.innerHTML= response.max_temp
            tor_wind_speed.innerHTML= response.wind_speed
            tor_wind_degrees.innerHTML= response.wind_degrees
            tor_sunriset.innerHTML= response.sunrise
            tor_sunset.innerHTML= response.sunset
        })
        .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai' , options)
.then(response => response.json())
        .then((response) => {
            dubai_cloud_pct.innerHTML= response.cloud_pct
            dubai_temp.innerHTML= response.temp
            dubai_feels_like.innerHTML= response.feels_like
            dubai_humidity.innerHTML= response.humidity
            dubai_min_temp.innerHTML= response.min_temp
            dubai_max_temp.innerHTML= response.max_temp
            dubai_wind_speed.innerHTML= response.wind_speed
            dubai_wind_degrees.innerHTML= response.wind_degrees
            dubai_sunriset.innerHTML= response.sunrise
            dubai_sunset.innerHTML= response.sunset
        })
        .catch(err => console.error(err));
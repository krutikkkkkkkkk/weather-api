const apiKey = "89ef8a05b6c964f4cab9e2f97f696c81";  
const KELVIN = 273; 

let d = new Date();
let date = d.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[d.getMonth()];
let year = d.getFullYear();
document.getElementById('date').innerHTML = date + " "+ month + " " + year;


if('geolocation' in navigator){  
    navigator.geolocation.getCurrentPosition(setPosition);  
}else{  
   alert("Browser doesn't Support Geolocation");
} 

function setPosition(position){  
    let latitude = position.coords.latitude;  
    let longitude = position.coords.longitude;  
      
    checkWeather(latitude, longitude) 
}  

function checkWeather(latitude, longitude) {

let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
 
fetch(api)
.then(response => response.json())
.then(data => {

    let temp = Math.floor(data.main.temp - KELVIN);  
    let city = data.name;
    let feels_like = Math.floor(data.main.feels_like - KELVIN);
    let status = data.weather[0].description;
    let icon = data.weather[0].icon;
    let windSpeed =data.wind.speed; 

    document.getElementById('city').innerHTML = city;
    document.getElementById('temp').innerHTML = temp;
    document.getElementById('status').innerHTML = status;
    document.getElementById('feelsLike').innerHTML = feels_like + "°C";
    document.getElementById('windSpeed').innerHTML = windSpeed +"m/s";
    document.getElementById('icon').src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';  

})
.catch(err => console.log(err))
}


function locate() {

    let location = document.getElementById('location').value;

    let loacateThis = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
     
    fetch(loacateThis)
    .then(response => response.json())
    .then(data => {
    
        let temp = Math.floor(data.main.temp - KELVIN);  
        let city = data.name;
        let feels_like = Math.floor(data.main.feels_like - KELVIN);
        let status =  data.weather[0].description;
        let icon = data.weather[0].icon;
        let windSpeed =data.wind.speed; 
    
        document.getElementById('city').innerHTML = city;
        document.getElementById('temp').innerHTML = temp;
        document.getElementById('status').innerHTML = status;
        document.getElementById('feelsLike').innerHTML = feels_like + "°C";
        document.getElementById('windSpeed').innerHTML = windSpeed +"m/s";
        document.getElementById('icon').src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png'; 
       
    
    })
    .catch(err => console.log(err))
    }
    
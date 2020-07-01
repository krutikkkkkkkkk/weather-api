     const weather = {};  
  
weather.temperature = {  
    unit : "celsius"  
}  
  
const KELVIN = 273;  
   
  
const key = "89ef8a05b6c964f4cab9e2f97f696c81";  
  
if('geolocation' in navigator){  
    navigator.geolocation.getCurrentPosition(setPosition, showError);  
}else{  
   alert("Browser doesn't Support Geolocation");
}  
  
function setPosition(position){  
    let latitude = position.coords.latitude;  
    let longitude = position.coords.longitude;  
      
    getWeather(latitude, longitude);  
}  
  
function showError(error){    
   document.getElementById('ans').innerHTML = `<p> ${error.message} </p>`;  
}  
  
function getWeather(latitude, longitude){  
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;  
      
    fetch(api)  
         .then(function(response){  
            let data = response.json();  
            return data;
             const { main, name, sys, weather } = data;


        }) 
.then(function(data){  
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);  
            weather.city = data.name;
            weather.feel = Math.floor(data.main.feels_like - KELVIN);
            air = data.wind.speed;  
            vibe = data.weather[0].description;
            icon = data.weather[0].icon;
            document.getElementById('imageBox').src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';   
        })  
.then(function(){  
            displayWeather();  
        });  
}  
  
function displayWeather(){ 
  document.getElementById('city').innerHTML = weather.city;
  document.getElementById('place').innerHTML = weather.temperature.value;
  document.getElementById('temp').innerHTML = weather.feel+"°C";
  document.getElementById('humidity').innerHTML = air + "&nbsp;m/s";
  document.getElementById('pressure').innerHTML = vibe + '<img src="" + icon + "@2x.png">';
  

  text="Current weather in"+weather.city+ "is"+weather.temperature.value+"Degree celsius"+"But it feels like"+weather.feel+"Degree celsius";
  responsiveVoice.speak(text);
}

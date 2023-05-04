const da = new Date();


var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var output =  daylist[day] ;
document.getElementById("day").innerHTML = output;

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let d=new Date();
let date=document.querySelector('.date');
date.innerHTML=month[d.getMonth()];



let country=document.getElementById('country');
let apiKey='642e83413059a1332748e04f88c4ec55';
let apiUrl1='https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
let search_btn=document.getElementById('searchbtn');
let search_box=document.getElementById('searchbox');
let icon=document.getElementById('image');
let background=document.getElementById('body');


async function checkweather(city){
    const response=await fetch(apiUrl1+city+`&appid=${apiKey}`);
    var data= await response.json();
    country.innerHTML=data.name;
    document.getElementById('humidity').innerHTML=data.main.humidity+'%';
    document.getElementById('windspeed').innerHTML= data.wind.speed+'km/s';
    document.getElementById('temperature').innerHTML=Math.floor(data.main.temp)+'°C';
    document.getElementById('pressureoutput').innerHTML=`${data.main.pressure}Pa`;
    document.querySelector('.weathers').innerHTML=data.weather[0].description;
    console.log(data);

    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    
    if(data.weather[0].main=='Clouds'){
        background.style.transition='0.5s';
        background.style.backgroundImage='url("clouds.jpg")';
        document.querySelector('.weather-right-side').style.color='white';
        document.querySelector('.weather-left-side').style.color='white';
    }
     else if(data.weather[0].main=='Clear'){
    
        background.style.backgroundImage='URL("Sunny.jpg")';
        document.querySelector('.weather-right-side').style.color='white';
        document.querySelector('.weather-left-side').style.color='black';
    }
    else if(data.weather[0].main=='Rain'){
       
        background.style.backgroundImage="URL('Rainy.jpg')";
        document.querySelector('.weather-right-side').style.color='white';
        document.querySelector('.weather-left-side').style.color='white';
    }
    else if(data.weather[0].main=='Snow'){
        background.style.backgroundImage="URL('Morning.jpg')";
        document.querySelector('.weather-left-side').style.color='black';
    }
    
   
}

search_btn.addEventListener('click',()=>{
    
    checkweather(search_box.value);
});


window.onload(checkweather('Wakefield'));




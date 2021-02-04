//DOM elements

const clock = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const todayDate = document.getElementById('toDate');
const bgButton = document.getElementById('bgButton');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

// Function to show time
const showTime = () => {
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();

  clock.textContent = `${hour} : ${addZero(minute)} : ${addZero(second)}`;

    setTimeout(showTime, 1000);
    //requestAnimationFrame
}

//add zero
const addZero = (n) => (parseInt(n,10) < 10 ? "0" : "") + n;


// Function to show date
const showDate = () => {
  const today = new Date();
  const date = today.getDate();
  const day = today.getDay();
  const month = today.getMonth();

    let week = ["Воскресенье", "Понедельник", "Вторник", "Среда","Четверг","Пятница","Суббота"];
    dayOfWeek = week[day];

    let year = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]
    monthOfYear = year[month];
    todayDate.textContent =`${dayOfWeek},  ${date}  ${monthOfYear}`;
}

//set BG & greeting

let setBgGr = () => {
    const today = new Date();
    const hour = today.getHours();
    const morning = hour > 6 && hour < 12;
    const afternoon = hour > 12 && hour < 18;
    const evening = hour > 18 && hour < 24;
    const imgStore = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
    let rigtImg = '';

    //change BG every hour

    if(hour == 0 || hour == 6 || hour == 12 || hour == 18) {
      rigtImg = imgStore[0];
    } else if (hour == 1 || hour == 7 || hour == 13 || hour == 19) {
      rigtImg = imgStore[1];
    } else if (hour == 2 || hour == 8 || hour == 14 || hour == 20) {
      rigtImg = imgStore[2];
    } else if (hour == 3 || hour == 9 || hour == 15 || hour == 21) {
      rigtImg = imgStore[3];
    } else if (hour == 4 || hour == 10 || hour == 16 || hour == 22) {
      rigtImg = imgStore[4];
    } else if (hour == 5 || hour == 11 || hour == 17 || hour == 23) {
      rigtImg = imgStore[5];
    }



    if(morning) {
    //morning

    let wayToImg = `./assets/img/morning/${rigtImg}`;
    document.getElementById('bg').style.backgroundImage = `url("${wayToImg}")`;
    greeting.textContent = 'Доброе утречко, ';
  } else if (afternoon) {
    // Afternoon
      let changeOnClick = () => {
        imgStore[i++];
      rigtImg = imgStore[i];
      return console.log(rigtImg);
    }

  bgButton.addEventListener('click',changeOnClick);

    let wayToImg = `./assets/img/afternoon/${rigtImg}`;
    document.getElementById('bg').style.backgroundImage = `url("${wayToImg}")`;
    greeting.textContent = 'Добрый денечек, ';
  } else if (evening){
    // Evening

    let wayToImg = `./assets/img/evening/${rigtImg}`;
    document.getElementById('bg').style.backgroundImage = `url("${wayToImg}")`;
    greeting.textContent = 'Добрейший вечерочек, ';
    document.body.style.color = 'white';
  } else {
    //night & onclick

    let wayToImg = `./assets/img/night/${rigtImg}`;
    document.getElementById('bg').style.backgroundImage = `url("${wayToImg}")`;
    greeting.textContent = 'Доброй ночки, ';
    document.body.style.color = 'white';
  }
}

// Get name
let  getName = () => {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Впиши сюда свое имя]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
      }
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
}

// Get focus
let  getFocus = () => {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = "[Впиши сюда задачи]";
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }

  // Add weather on page
  async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
  }

  function setCity(event) {
    if (event.code === 'Enter') {
      getWeather();
      city.blur();
    }
  }

  document.addEventListener('DOMContentLoaded', getWeather);
  city.addEventListener('keypress', setCity);

name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


//run function
showTime();
setBgGr ();
getName();
getFocus();
showDate();

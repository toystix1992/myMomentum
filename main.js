//DOM elements

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const toDate = document.getElementById('toDate');

// Function to show time
let showTime = () => {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();


    time.innerHTML = `${hour} <span>:</span>${addZero(minute)}<span>:</span>${addZero(second)}`;

    setTimeout(showTime, 1000);
}

//add zero
let addZero = (n) => {
    return (parseInt(n,10) < 10 ? "0" : "") + n;
}

// Function to show date
let showDate = () => {
    let today = new Date();
    let date = today.getDate();
    let day = today.getDay();
    let month = today.getMonth();

    let week = ["Воскресенье", "Понедельник", "Вторник", "Среда","Четверг","Пятница","Суббота"];
    dayOfWeek = week[day];

    let year = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]
    monthOfYear = year[month];
    toDate.innerHTML =`${dayOfWeek}<span>,</span>   ${date}  ${monthOfYear}`;
}

//set BG & greeting

let setBgGr = () => {
    let today = new Date(),
    hour = today.getHours();
    //minute = today.getMinutes();
    let imgStore = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
    for (let i = 0; i < imgStore.length; i++) {
      const element = imgStore[i];
    }

        if(hour < 12 && hour >04) {
        //morning
        setTi
        let way = `'/assets/img/morning/${imgStore[i]}'`;
        document.getElementById('bg').style.backgroundImage = "url("+way+")";
        greeting.textContent = 'Доброе утречко, ';
      } else if (hour < 18 && hour < 23) {
        // Afternoon
        let way = `'/assets/img/afternoon/${imgStore[2]}'`;
        document.getElementById('bg').style.backgroundImage = "url("+way+")";
        greeting.textContent = 'Добрый денечек, ';
      } else {
        // Evening
        let way = `'/assets/img/evening/${imgStore[i]}'`;
        document.getElementById('bg').style.backgroundImage = "url("+way+")";
        greeting.textContent = 'Добрейший вечерочек, ';
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

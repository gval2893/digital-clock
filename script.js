var dayDOM = document.querySelector('#day');
var hourDOM = document.getElementById('hour');
var minuteDOM = document.querySelector('#minute');
var ampmDOM = document.getElementById('ampm');

function calculateTime(){
    // console.log('The page has loaded');
    var dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FR', 'SAT'];
    var date = new Date();
    console.log(day);
        var dayNumber = date.getDate();
    // console.log(dayNames[dayNumber]);
    day.textContent = dayNames[dayNumber];

    var hour = date.getHours();
    hour = hour % 12;
    hour = hour ? hour :12;
    hour = hour < 10 ? `0${hour}` : hour;
    hourDOM.textContent = hour;
   
   
    var minute = date.getMinutes();
    // console.log(minute);
    minute = minute < 10 ? `0${minute}`: minute;
    minuteDOM.textContent = minute;

    // var ampm = hour >=12 ? 'PM' :'AM';
    var ampm = hour <=12 ? 'PM' :'AM';
    ampmDOM.textContent = ampm;



    // setTimeout(calculate, 200);
}

window.addEventListener('load', calculateTime);


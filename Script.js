// Selecting DOM elements
const alarmList = document.getElementById('alarm-list');
const alarmHours = document.getElementById('alarm-hours');
const alarmMinutes = document.getElementById('alarm-minutes');
const alarmSeconds = document.getElementById('alarm-seconds');
const alarmAmPm = document.getElementById('alarm-am-pm');
const alarmSound = document.getElementById('alarmSound');

  
  var h2 = document.getElementById("clock");
  
  // display current time by the second
  
  var currentTime = setInterval(function () {
    var date = new Date();
  
    var hours = 12 - date.getHours();
    // var hours = date.getHours();
  
    var minutes = date.getMinutes();
  
    var seconds = date.getSeconds();
  
    var ampm = date.getHours() < 12 ? "AM" : "PM";
  
    //convert military time to standard time
  
    if (hours < 0) {
      hours = hours * -1;
    } else if (hours == 00) {
      hours = 12;
    } else {
      hours = hours;
    }
  
    console.log("call");
    h2.textContent =
      addZero(hours) +
      ":" +
      addZero(minutes) +
      ":" +
      addZero(seconds) +
      "" +
      ampm;
  }, 1000);

/*functions to get hour, min, secs, 
  am or pm, add zero, set alarm time and sound, clear alarm
*/

function addZero(time) {
    return time < 10 ? "0" + time : time;
  }
    

// Function to set the alarm
function setAlarm() {
    const hours = alarmHours.value;
    const minutes = alarmMinutes.value;
    const seconds = alarmSeconds.value;
    const amPm = alarmAmPm.value;
    const alarmTime = `${hours}:${minutes}:${seconds} ${amPm}`;
    const li = document.createElement('li');
    li.textContent = alarmTime;
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });
    li.appendChild(deleteButton);
    alarmList.appendChild(li);
}

// Function to check for alarms
function checkAlarms() {
    const now = new Date();
    const nowTime = now.toLocaleTimeString('en-US', {hour12: true});
    const alarms = document.querySelectorAll('#alarm-list li');
    alarms.forEach(alarm => {
        const alarmTime = alarm.textContent;
        if (nowTime === alarmTime) {
            alert(`Alarm! ${alarmTime}`);
            alarmSound.play();
        }
    });
}

// Setting the clock
setInterval(currentTime, 1000);

// Checking for alarms every second
setInterval(checkAlarms, 1000);

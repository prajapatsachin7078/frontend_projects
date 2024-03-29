const selectMenu = document.querySelectorAll("select"), currentTime = document.querySelector("h2"),
setAlarmButton = document.querySelector("button");

let alarmTime,isAlarmSet = false;
let ringtone = new Audio("ringtone.mp3")

for (let i = 12; i > 0; i--) {
    let value = i < 10 ? "0" + i : i;
    let option = `<option value="${value}">${value}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    let value = i < 10 ? "0" + i : i;
    let option = `<option value="${value}">${value}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    // getting hour, mins, secs
    let date = new Date();
    let h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";

    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }

    // if hour value is 0, set this value to 12
    h = h == 0 ? h = 12 : h;
    // adding 0 before hr, min, sec if this value is less than 10 
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
    
    // Check if the current time matches the alarm time without seconds
    if (alarmTime && alarmTime.substring(0, 8) === `${h}:${m}:${ampm}`) {
       ringtone.play();
       ringtone.loop = true;
    }
}, 1000);

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        setAlarmButton.innerText = "Set Alarm";

        // Disable the time fields when the alarm is cleared
        selectMenu.forEach(select => {
            select.disabled = false;
        });

        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`;

    if (time.includes("Hour") || time.includes("Minutes") || time.includes("AM/PM")) {
        return alert("Please Select valid time to set Alarm!");
    }

    isAlarmSet = true;
    alarmTime = time;
    setAlarmButton.innerText = "Clear Alarm";

    // Disable the time fields when the alarm is set
    selectMenu.forEach(select => {
        select.disabled = true;
    });

    console.log(time);
}


setAlarmButton.addEventListener("click",setAlarm);

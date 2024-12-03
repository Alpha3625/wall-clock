function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hr');
    const minuteHand = document.getElementById('mn');
    const secondHand = document.getElementById('sc');

    const hourDegrees = 30 * (hours % 12) + 0.5 * minutes;
    const minuteDegrees = 6 * minutes + 0.1 * seconds;
    const secondDegrees = 6 * seconds;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

let clockInterval = null;
const turnOnBtn = document.getElementById("turn-on-button");
const turnOffBtn = document.getElementById("turn-off-button");
turnOffBtn.style.backgroundColor = "#ff0000";

function initializeClock() {
    const isClockOn = localStorage.getItem('clockStatus') === 'on';
    if (isClockOn) {
        turnOn();
    } else {
        turnOff();
    }
}

function turnOn() {
    if (!clockInterval) {
        turnOnBtn.style.backgroundColor = "#008000";
        turnOffBtn.style.backgroundColor = "#0491e3";
        clockInterval = setInterval(updateClock, 1000);
        localStorage.setItem('clockStatus', 'on');
    }
}

function turnOff() {
    turnOffBtn.style.backgroundColor = "#ff0000";
    turnOnBtn.style.backgroundColor = "#0491e3";
    clearInterval(clockInterval);
    clockInterval = null;
    localStorage.setItem('clockStatus', 'off');
}

initializeClock();

turnOnBtn.addEventListener("click", turnOn);
turnOffBtn.addEventListener("click", turnOff);
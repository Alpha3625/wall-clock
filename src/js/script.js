function updateClock() {
    const now = new Date();
    const utcOffset = now.getTimezoneOffset() * 60000;
    const moscowTime = new Date(now.getTime() + utcOffset + 3 * 3600000);

    const hours = moscowTime.getHours();
    const minutes = moscowTime.getMinutes();
    const seconds = moscowTime.getSeconds();

    const secondHand = document.getElementById('sc');
    const minuteHand = document.getElementById('mn');
    const hourHand = document.getElementById('hr');

    const secondDegrees =  seconds * 6;
    const minuteDegrees = (minutes * 6) + (seconds / 60) * 6;
    const hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
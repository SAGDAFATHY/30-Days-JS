const handmin = document.querySelector('.hand-min');
const handhour = document.querySelector('.hand-hour');
const handsec = document.querySelector('.hand-sec');

function setDate() {
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours();
    
    const secDegrees = sec * 6 + 90;
    const minDegrees = min * 6 + 90;
    const hourDegrees = (hour % 12) * 30 + min * 0.5 + 90; 
    
    handsec.style.transform = `rotate(${secDegrees}deg)`;
    handmin.style.transform = `rotate(${minDegrees}deg)`;
    handhour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000); // Update the clock every second

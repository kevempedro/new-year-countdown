const spinnerLoading = document.querySelector('#loading');
const countdownContainer = document.querySelector('#countdown');

const yearContainer = document.querySelector('#year');
const daysContainer = document.querySelector('#days');
const hoursContainer = document.querySelector('#hours');
const minutesContainer = document.querySelector('#minutes');
const secondsContainer = document.querySelector('#seconds');

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

yearContainer.textContent = nextYear;

const getTimeUnit = unit => unit < 10 ? `0${unit}` : unit;

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    daysContainer.textContent = getTimeUnit(days);
    hoursContainer.textContent = getTimeUnit(hours);
    minutesContainer.textContent = getTimeUnit(minutes);
    secondsContainer.textContent = getTimeUnit(seconds);
};

const updateCountdown = () => {
    const currenteDate = new Date();
    const diffence = newYearTime - currenteDate;
    const days = Math.floor(diffence / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diffence / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diffence / 1000 / 60) % 60;
    const seconds = Math.floor(diffence / 1000) % 60;

    insertCountdownValues({ days, hours, minutes, seconds });
};

const handleCountdownDisplay = () => {
    spinnerLoading.remove();
    countdownContainer.style.display =  'flex';
};

setTimeout(handleCountdownDisplay, 1000);

setInterval(updateCountdown, 1000);

const startTime = () => {
  const time = new Date();
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  let meridiem = '';
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (time.getHours() > 12) {
    meridiem = 'PM';
    hours = time.getHours() - 12;
  } else {
    meridiem = 'AM';
    hours = time.getHours();
  }

  if (hours / 10 < 1) {
    hours = `0${hours}`;
  }

  if (time.getMinutes() / 10 < 1) {
    minutes = `0${time.getMinutes()}`;
  } else {
    minutes = time.getMinutes();
  }

  if (time.getMinutes() / 10 < 1) {
    minutes = `0${time.getMinutes()}`;
  } else {
    minutes = time.getMinutes();
  }

  if (time.getSeconds() / 10 < 1) {
    seconds = `0${time.getSeconds()}`;
  } else {
    seconds = time.getSeconds();
  }

  const yearElement = document.querySelector('.clock--year p');
  const monthElement = document.querySelector('.clock--month p');
  const dayElement = document.querySelector('.clock--day p');
  const meridiemElement = document.querySelector('.clock--meridiem p');
  const hoursElment = document.querySelector('.clock--hours p');
  const minutesElment = document.querySelector('.clock--minutes p');
  const secondsElment = document.querySelector('.clock--seconds p');

  yearElement.innerHTML = time.getFullYear();
  monthElement.innerHTML = months[time.getMonth()];
  dayElement.innerHTML = time.getDate();
  meridiemElement.innerHTML = meridiem;
  hoursElment.innerHTML = hours;
  minutesElment.innerHTML = minutes;
  secondsElment.innerHTML = seconds;

  setTimeout(startTime, 1000);
};

startTime();

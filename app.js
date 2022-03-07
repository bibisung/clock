const startTime = () => {
  const time = new Date();
  const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const title = `Lost time is never found again...`

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

  if (time.getSeconds() / 10 < 1) {
    seconds = `0${time.getSeconds()}`;
  } else {
    seconds = time.getSeconds();
  }

  const titleElement = document.querySelector('.title p');
  const meridiemElement = document.querySelector('.clock--meridiem p');
  const hoursElment = document.querySelector('.clock--hours p');
  const minutesElment = document.querySelector('.clock--minutes p');
  const secondsElment = document.querySelector('.clock--seconds p');
  const dateElement = document.querySelector('.date p');

  titleElement.innerHTML = title;
  meridiemElement.innerHTML = meridiem;
  hoursElment.innerHTML = hours;
  minutesElment.innerHTML = minutes;
  secondsElment.innerHTML = seconds;
  dateElement.innerHTML = `${day[time.getDay()]}, ${months[time.getMonth()]} ${time.getDate()} ${time.getFullYear()}`;

  setTimeout(startTime, 1000);
};

startTime();
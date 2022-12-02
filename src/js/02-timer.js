import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  wrapDays: document.querySelector('span[data-days]'),
  wrapHours: document.querySelector('span[data-hours]'),
  wrapMinutes: document.querySelector('span[data-minutes]'),
  wrapSeconds: document.querySelector('span[data-seconds]'),
};
let timer;
refs.btnStart.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(pickDate) {
    if (pickDate[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
      console.log('big numb');
      return;
    }

    refs.btnStart.removeAttribute('disabled');

    function showTimer() {
      const currentDate = new Date();

      const diffDate = pickDate[0] - currentDate;

      const { days, hours, minutes, seconds } = convertMs(diffDate);
 
      refs.wrapDays.textContent = days.toString().padStart(2,"0");
      refs.wrapHours.textContent = hours.toString().padStart(2,"0");
      refs.wrapMinutes.textContent = minutes.toString().padStart(2,"0");
      refs.wrapSeconds.textContent = seconds.toString().padStart(2,"0");
    }

    function onClickStartBtn() {
      if (timer) {
        clearInterval(timer);
      }
      showTimer();
      timer = setInterval(showTimer, 1000);
    }

    refs.btnStart.addEventListener('click', onClickStartBtn);
  },
};

flatpickr('#datetime-picker', {
  ...options,
});

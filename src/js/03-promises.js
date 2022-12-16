import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

const onSubmitForm = e => {
  e.preventDefault();


  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  let delayInput = Number(delay.value);

  for (let i = 1; i <= Number(amount.value); i++) {
    createPromise(i, delayInput)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayInput += Number(step.value);
  }

  e.currentTarget.reset();
};

form.addEventListener('submit', onSubmitForm);
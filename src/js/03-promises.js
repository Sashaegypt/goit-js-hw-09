import { Notify } from 'notiflix';

function createPromise(position, delay) {
  const promise = new Promise((resolt, reject) =>{
    const shouldResolve = Math.random() > 0.3;
   setTimeout(() => {
    if (shouldResolve) {
      resolt({position,delay});
    } else {
      reject({position,delay});
    }
   },delay);
    
  });
  return promise;
}

const formEl = document.querySelector('.form');
formEl.addEventListener('submit',onSubmit);
function onSubmit(e){
  e.preventDefault();
  let delay = Number(e.currentTarget.delay.value);
  const amount = Number(e.currentTarget.amount.value);
  const step = Number(e.currentTarget.step.value);
  for(let i = 1; i <= amount; i += 1){
    createPromise(i,delay).then(onSuccess).catch(onError);
    delay += step;
  }
}

function onSuccess({position,delay}){
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position,delay}){
  Notify.success(`❌ Rejected promise ${position} in ${delay}ms`);
}
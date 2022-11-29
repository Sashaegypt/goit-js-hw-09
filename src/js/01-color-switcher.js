const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let intervalId = null;

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

function onStart() {
    startBtn.disabled = true;
    intervalId = setInterval(() => {
       document.body.style.backgroundColor = getRandomHexColor(); 
    }, 1000); 
}

function onStop(){
 startBtn.disabled = false;
 clearInterval(intervalId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
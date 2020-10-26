let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
    //clear any existing timers
    clearInterval(countdown);
    // Getting the current time
    const now = Date.now();
    const then = now + seconds * 1000;
    // console.log({now, then});
    displayTimeLeft(seconds);  
    displayEndTime(then);

    countdown = setInterval(()=> {
        const secondsLeft = Math.round((then - Date.now())/1000);
        // check if we should stop it
        if(secondsLeft <= 0){
        clearInterval(countdown);    
            return;
        }
        // display it
        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds/60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${
        remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
    // console.log({minutes, remainderSeconds});
}

function displayEndTime(timestamp){
const end = new Date(timestamp);
const hour = end.getHours();
const adjustedHour = hour > 12 ? hour - 12 : hour
const minutes = end.getMinutes();
endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer(){
// convert the seconds to a real number using the parseInt
const seconds = parseInt(this.dataset.time);
timer(seconds);
console.log(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
// Note: you could listen for a HTML element using "document.name" like below:
document.customForm.addEventListener('submit', function(e){
e.preventDefault(); 
const mins = this.minutes.value;
console.log(mins);
timer(mins * 60);
this.reset();
});
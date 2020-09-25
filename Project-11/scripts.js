// Get our Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// Build our functions
function togglePlay(){
    // if(video.paused){
    //     video.play();
    // }else{
    //     video.pause();
    // } OR using the tenery operator:
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton(){
// console.log('Updating button');
const icon = this.paused ? '►' : '❚ ❚';
toggle.textContent = icon;
}

function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate(){
    console.log(this.value);
    video[this.name] = this.value;
}

function handleProgress(){
const percent = (video.currentTime / video.duration) * 100;
progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX /progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
console.log(e);
}
// Hook up with event listeners
video.addEventListener('click', togglePlay);
// Listen for when the video is playing, and update the button
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));

// Listen for a change event on the range and execute the function handleRangeUpdate
ranges.forEach(range=> range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range=> range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
// listen for a mousemove event, and check if mousedown is true, if it is, execute scrub or else stop
progress.addEventListener('mousemove', (e)=> mousedown && scrub(e));
progress.addEventListener('mousedown', ()=> mousedown = true);
progress.addEventListener('mouseup', ()=> mousedown = false);


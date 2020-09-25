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
// Hook up with event listeners
video.addEventListener('click', togglePlay);
// Listen for when the video is playing, and update the button
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp');

// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

// This plays and pauses the video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    };
}

// This toggles play/pause button
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// Stops video and returns it to the beginning
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function updateProgress() {
    return true;
}

function setVideoProgress() {
    return true;
}


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

// This sets the progress slider at the correct position
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100

    // Gets minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + mins
    }

    // Gets seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + secs;
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}

// This adds functionality to the slider
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}


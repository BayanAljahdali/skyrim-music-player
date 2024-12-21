const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const volumeSlider = document.getElementById('volume-slider');

playButton.addEventListener('click', () => {
  audioPlayer.play();
  playButton.style.display = 'none';
  pauseButton.style.display = 'inline';
});

pauseButton.addEventListener('click', () => {
  audioPlayer.pause();
  pauseButton.style.display = 'none';
  playButton.style.display = 'inline';
});

volumeSlider.addEventListener('input', (e) => {
	audioPlayer.volume = e.target.value;
  });

  window.addEventListener('load', () => {
	audioPlayer.volume = volumeSlider.value;
  });


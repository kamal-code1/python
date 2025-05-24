function playSound(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const button = document.querySelector(`.drum[data-key="${key}"]`);
  if (!audio) return; 

  audio.currentTime = 0; 
  audio.play();

  if (button) {
    button.classList.add('playing');
    setTimeout(() => button.classList.remove('playing'), 100);
  }
}


document.querySelectorAll('.drum').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-key');
    playSound(key);
  });
});


window.addEventListener('keydown', e => {
  playSound(e.key.toLowerCase());
});

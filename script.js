function showLove() {
    document.getElementById('surprise').classList.remove('hidden');
  }

function flipCard() {
    document.getElementById('flipCard').classList.toggle('flipped');
}  
  document.addEventListener('click', () => {
    const audio = document.querySelector('.container');
    if (audio && audio.paused) {
      audio.play().catch(e => console.log("Autoplay blocked:", e));
    }
  }, { once: true });

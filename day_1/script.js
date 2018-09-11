// When keydown, play sound and show key effect
window.addEventListener('keydown', playSound);

// Remove effects on keys when transition end
const keys = Array.from(document.querySelectorAll('.key')); // If not using Array.from(), it's a Node List (an object)
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


// Functions

function playSound(e) {
  // Find the relevant audio
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (!audio) return;  // Stop the function from running all together
  audio.currentTime = 0;  // Rewind to the start
  audio.play();

  // Key effects
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  // Skip if it's not a transform, we just need one event
  // It works without this line though

  e.target.classList.remove('playing');
}

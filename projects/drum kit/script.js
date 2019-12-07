function removeTransition(e) {
    console.log(e);
    // if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    if (!audio) return;
    //change to play sound param to take a number(data key) instead ov an event
    //do the same with key down event listner to pass the number to play sound

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
const audioSamples = Array.from(document.querySelectorAll('audio'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', function(e){
   // console.log(key.dataset.key);
    playSound(key.dataset.key);
}))
window.addEventListener('keydown', function(event){
    playSound(event.keyCode)
})
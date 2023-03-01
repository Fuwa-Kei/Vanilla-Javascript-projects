window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return;  //stop the function if wrong key pressed
    audio.currentTime = 0; //allow constant playing of the sound 
    audio.play();

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
    // setTimeout(function() {
    //     key.classList.remove("playing");
    // }, 100); This can clash with the transition time in the css to bottom method better 


    function removePlaying() {
        // if(e.propertyName !== 'transform') return; 
        key.classList.remove("playing");
    }
    // should remove the class when the transition is finished instead
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removePlaying));
})
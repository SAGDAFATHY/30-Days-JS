window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // Stop if no audio element is found
    if (!key) return;   // Stop if no key element is found

    audio.currentTime = 0; // Rewind the audio to the start
    audio.play();
    key.classList.add('playing');
    setTimeout(
        function () {
            key.classList.remove('playing')
        },
        1
    ) // Add playing class for the visual effect
});

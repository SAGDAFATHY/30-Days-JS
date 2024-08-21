
window.addEventListener('keydown',function(e){
    
   const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
   if(!audio) return;
   audio.currentTime =0;
   audio.play();
    const key= document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add(`playing`)
      
})


function removeTransition(e){
    console.log(e)
}
const keys = document.querySelectorAll('.key')
keys.forEach(ke => ke.addEventListener('transitionend',removeTransition))
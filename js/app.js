
// Fonction qui lance une piste audio lorsque l'évènement "keydown", donc quand on appuit sur une touche du clavier
function playPiano(e){
  // On récupére la clé du clavier ex 65 = a
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const note = document.querySelector(`.clavier__white[data-key="${e.keyCode}"]`);

    //permets de ne pas attendre la fin de la piste audio avant qu'elle ne se lance de nouveau
     audio.currentTime = 0;
     audio.play();
     note.classList.add('clavier__whitePlay'); 
     
   }

   function removeTransition(e) {
     
     this.classList.remove('clavier__whitePlay');
   }
   const keys = document.querySelectorAll('.clavier__white');
   keys.forEach(note => note.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playPiano);
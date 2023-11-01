
let man = document.querySelector('.man')
let man2 = document.querySelector('.man2')

window.addEventListener('mousemove', abc) ;
    
  

function abc(event) {
    console.log('ami',event);

  man.style.top = `-${event.clientX / 10}px`;
  man.style.left = `-${event.clientY / 10}px`;

  man2.style.top = `-${event.clientY / 10}px`;
  man2.style.left = `-${event.clientX / 10}px`;
}
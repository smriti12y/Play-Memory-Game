const cards = document.querySelectorAll('.memory-card');

function flipCards(){
    this.classList.toggle('flip');
    
}

cards.forEach(cards =>  cards .addEventListener('click',flipCards));
    


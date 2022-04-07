'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');

//when several elements share the same class use querySelectorALL;
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    //when using classList, dont use ., just type the name of the class as it is. 
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for(let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);   
} 

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(event){
    if(event.key === "Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    }    
});
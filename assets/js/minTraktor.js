//GLOBALE VARIABLER
let myFadeImages = document.getElementsByClassName('fadeImg');

//ENTRY POINT
//Skifter til class 
window.addEventListener('load', (e)=>{
    e.preventDefault();
    console.log('loaded');
    for (const myElement of myFadeImages){
        myElement.classList.toggle('showImg');
    };
});

const btn = document.querySelectorAll('#faq-list button');


for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener('click', (e) => {
        let section = e.target.parentNode.parentNode;
        section.classList.toggle('active');
    
    })
};
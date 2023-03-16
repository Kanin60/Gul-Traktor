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

//om traktor
const btn = document.querySelectorAll('#faq-list button');


for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener('click', (e) => {
        let section = e.target.parentNode.parentNode;
        section.classList.toggle('active');
    
    })
};


// Accordion til About us section
const btnAbout = document.querySelectorAll('#about-list button');

for (let index = 0; index < btnAbout.length; index++) {
    btnAbout[index].addEventListener('click', (e) => {
        let sectionAbout = e.target.parentNode.parentNode;
        sectionAbout.classList.toggle('active');
    })
}


//FORM
const inputElement = document.getElementById('email');
const myButton = document.getElementById('send');
const tak = document.getElementById('takForTilmelding');
const myForm = document.querySelector('form');

myButton.addEventListener('click', (e)=> {
    e.preventDefault();
    const inputValue = inputElement.value.trim();
    const regex = /^[\w.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    if(regex.test(inputValue)){
        inputElement.classList.remove('invalidInput');
        inputElement.classList.add('validInput');
        myForm.classList.add('formAnimation')
        tak.classList.remove('noTakBesked');
        tak.classList.add('takBesked');

    }
    else if (inputValue === '' || !regex.test(inputValue)) {
        inputElement.classList.remove('validInput');
        inputElement.classList.add('invalidInput');
        console.log(inputElement.classList);
    return;
    } 
});
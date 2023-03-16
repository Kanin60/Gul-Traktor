

const btn = document.querySelectorAll('#faq-list button');


for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener('click', (e) => {
        let section = e.target.parentNode.parentNode;
        section.classList.toggle('active');
    
    })

    
}






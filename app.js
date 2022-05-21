const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
    //Button click active class
    sectBtn.forEach((button => {
        button.addEventListener('click', () => {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.classList.remove('active-btn');
            button.classList.add('active-btn');
        })
    }))
}

PageTransitions();
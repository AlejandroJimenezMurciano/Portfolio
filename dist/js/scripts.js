const toggleMenuElement = document.getElementById('toggle-menu');
const menuElement = document.getElementById('menu');
const rightArrowElement = document.getElementById('arrow-icon-right');
const leftArrowElement = document.getElementById('arrow-icon-left');
const allSliderItems = document.querySelectorAll('.projects__descriptions')
const rootStyles = document.documentElement.style

let counter = 0;
let translate = 0;

const moveSlide = () => {
    rootStyles.setProperty('--slider-translate', 100 * translate * -1 + '%')
}

const nextSlide = () => {


    if (counter > allSliderItems.length - 2) {
        counter = 0;
        translate = 0
    }
    else {
        counter = counter + 1;
        translate = translate + 1
    }

    moveSlide()
    console.log(100 * translate * -1 + '%')
}

const prevSlide = () => {
    if (counter <= 0) {
        counter = allSliderItems.length - 2
        translate = allSliderItems.length - 2
    }
    else {
        counter = counter - 1;
        translate = translate - 1;
    }

    moveSlide()
}



toggleMenuElement.addEventListener('click', () => {
    menuElement.classList.toggle('menu--show');
});

rightArrowElement.addEventListener('click', nextSlide)

leftArrowElement.addEventListener('click', prevSlide)
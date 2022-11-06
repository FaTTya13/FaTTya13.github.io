const accordionDropDown = document.querySelector('.extraPrices__title');
const accordionOptions = document.querySelector('.extraPrices__content');

accordionDropDown.addEventListener('click', () => {
    toggleAccordion();
});

function toggleAccordion() {    
    accordionOptions.classList.toggle('active'); 
};
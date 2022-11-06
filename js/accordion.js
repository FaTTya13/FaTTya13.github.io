const accordionTitles = document.getElementsByClassName('content__title');
const accordionTexts = document.getElementsByClassName('content__text');

Array.from(accordionTitles).forEach( (title, i) => {
  title.addEventListener('click', () => {
    for (let j = 0; j < accordionTexts.length; j++) {
      if (i == j) {
        accordionTexts[j].classList.toggle('active');
      } else {
          accordionTexts[j].classList.remove('active');
      }
    } 
  });
})
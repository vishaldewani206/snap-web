let mainLink = document.querySelectorAll('.main-link-a');
let arrows = document.querySelectorAll('.arrow');
let firstLink = document.querySelector('.firstLink');
firstLink.addEventListener('mouseover', () => {
  for (let i = 0; i < arrows.length; i++) {
    mainLink[i].onmouseover = function () {
      arrows[i].src = 'images/icon-arrow-up.svg';
    };
    mainLink[i].onmouseout = function () {
      arrows[i].src = 'images/icon-arrow-down.svg';
    };
  }
});

//hamburger
let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('show');
});

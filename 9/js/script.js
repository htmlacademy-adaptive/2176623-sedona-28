if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

const menu = document.querySelector('.navigation');
const menuBtn = document.querySelector('.navigation__btn');
const body = document.querySelector('body');

if (document.querySelector('.no-js')) {
  body.classList.remove('no-js');
}

if (menuBtn) {
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu.classList.toggle('navigation--open');
  })
}

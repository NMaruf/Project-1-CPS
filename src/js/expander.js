const mainWrapper = document.querySelector('.wrapper__main');
const modalWrapper = document.querySelector('.wrapper__modals');

const sideMenuCloseModal = modalWrapper.querySelector('.menu-wrap');
const feedbackCloseModal = modalWrapper.querySelector('.feedback-wrap');
const callCloseModal = modalWrapper.querySelector('.call-wrap');

const fullBrendsBtn = document.querySelector('.brends__full');
const brendWrapper = document.querySelector('.brend-wrapper');
const brendArrow = fullBrendsBtn.querySelector('.brends__arow');
const brendsTxt = fullBrendsBtn.querySelector('.brends__toggle');

const fullTechBtn = document.querySelector('.technics__full');
const techWrapper = document.querySelector('.technics-wrapper');
const techArrow = fullTechBtn.querySelector('.technics__arow');
const techTxt = fullTechBtn.querySelector('.technics__toggle');

const burgerMenu = document.querySelector('.menu__item.burger');
const closeMenu = document.querySelector('.menu__close');
const sideMenu = document.querySelector('.side-menu');

const modalFeedback = document.querySelector('.modal-feedback');
const feedbackBtn = document.querySelectorAll('.chat')
const feedbackCloseBtn = modalFeedback.querySelector('.modal-feedback__btn');

const modalCall = document.querySelector('.modal-call');
const callBtn = document.querySelectorAll('.call');
const callCloseBtn = modalCall.querySelector('.modal-call__btn');

function caseShowHide(wrapper, classShow, classHide, text, arow, arowClass) {
  wrapper.classList.toggle(classShow);
  wrapper.classList.toggle(classHide);
  arow.classList.toggle(arowClass);
  if (text.textContent === 'Показать все') {
    text.textContent = 'Скрыть';
  } else {
    text.textContent = 'Показать все';
  }
}

function openModal(modal, open) {
  modal.style.transition = "all 0.2s linear";
  mainWrapper.style.filter = "blur(5px) invert(0.05)";
  modal.classList.add(open);
}

function closeModal(modal, close) {
  modal.classList.remove(close)
  mainWrapper.style.filter = "";
}

fullBrendsBtn.addEventListener('click', () => {
  caseShowHide(brendWrapper, 'brend-wrapper--show', 'brend-wrapper--hide', brendsTxt, brendArrow, 'brends__arow--transform');
});

fullTechBtn.addEventListener('click', () => {
  caseShowHide(techWrapper, 'technics-wrapper--show', 'technics-wrapper--hide', techTxt, techArrow, 'technics__arow--transform');
});

burgerMenu.addEventListener('click', () => {
  openModal(sideMenu, 'side-menu--open');
});

closeMenu.addEventListener('click', () => {
  closeModal(sideMenu, 'side-menu--open');
});

feedbackBtn.forEach((elem) => {
  elem.addEventListener('click', () => {
    if (sideMenu.classList.contains('side-menu--open')) {
      sideMenu.classList.remove('side-menu--open')
    }
    sideMenu.style.filter = "blur(5px) invert(0.05)";
    openModal(modalFeedback, 'modal-feedback--open');
  })
});

feedbackCloseBtn.addEventListener('click', () => {
  closeModal(modalFeedback, 'modal-feedback--open');
  sideMenu.style.filter = "";
});

callBtn.forEach((elem) => {
  elem.addEventListener('click', () => {
    if (sideMenu.classList.contains('side-menu--open')) {
      sideMenu.classList.remove('side-menu--open')
    }
    sideMenu.style.filter = "blur(5px) invert(0.05)";
    openModal(modalCall, 'modal-call--open');
  })
});

callCloseBtn.addEventListener('click', () => {
  closeModal(modalCall, 'modal-call--open');
  sideMenu.style.filter = "";
});


sideMenuCloseModal.addEventListener('click', (event) => {
  if (event.target === sideMenuCloseModal) {
    closeModal(sideMenu, 'side-menu--open');
  }
});

feedbackCloseModal.addEventListener('click', (e) => {
  if (e.target === feedbackCloseModal) {
    closeModal(modalFeedback, 'modal-feedback--open');
    sideMenu.style.filter = "";
  }
});

callCloseModal.addEventListener('click', (e) => {
  if (e.target === callCloseModal) {
    closeModal(modalCall, 'modal-call--open');
    sideMenu.style.filter = "";
  }
});

document.addEventListener('keydown', (e) => {
  if (e.which === 27) {
    closeModal(sideMenu, 'side-menu--open');
    closeModal(modalCall, 'modal-call--open');
    closeModal(modalFeedback, 'modal-feedback--open');
    sideMenu.style.filter = "";
  }
});





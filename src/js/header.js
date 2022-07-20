import { onWatchedBtnClick } from "./library-pagination";
import { getRefs } from './get-refs';
const containerLib = getRefs().gallery;
import { onContainerClick } from './modal-movie';
import {onLibruaryCardClick} from './libruary-card'
// Refs
const refs = {
  headerContainer: document.querySelector('.js-header-container'),
  nav: document.querySelector('.nav'),
  logo: document.querySelector('.js-logo'),
  homeBtn: document.querySelector('a[data-link="home"]'),
  myLibraryBtn: document.querySelector('a[data-link="library"]'),
  form: document.querySelector('.js-submit'),
  myLibraryBtns: document.querySelector('.js-librari-list'),
  watchedBtn: document.querySelector('.js-watched-btn'),
  queueBtn: document.querySelector('.js-queue-btn'),
  container:document.querySelector('.gallery'),
};

const {
  headerContainer,
  nav,
  logo,
  homeBtn,
  myLibraryBtn,
  form,
  myLibraryBtns,
  watchedBtn,
  queueBtn,
  container,
} = refs;

function onShowMyLibrary() {
  myLibraryBtns.classList.remove('is-hidden');
  form.classList.add('is-hidden');
  homeBtn.classList.remove('current-page');
  myLibraryBtn.classList.add('current-page');
  headerContainer.classList.add('header__library-bg');
  headerContainer.classList.remove('header__home-bg');
  headerContainer.classList.add('header__library-padding');
  headerContainer.classList.remove('header__home-padding');
  nav.classList.add('nav__library-margin');
  nav.classList.remove('nav__home-margin');
  container.innerHTML = "";
  containerLib.removeEventListener('click', onContainerClick);
}

function onShowHome() {
  myLibraryBtns.classList.add('is-hidden');
  form.classList.remove('is-hidden');
  homeBtn.classList.add('current-page');
  myLibraryBtn.classList.remove('current-page');
  headerContainer.classList.add('header__home-bg');
  headerContainer.classList.remove('header__library-bg');
  headerContainer.classList.add('header__home-padding');
  headerContainer.classList.remove('header__library-padding');
  nav.classList.add('nav__home-margin');
  nav.classList.remove('nav__library-margin');
  containerLib.addEventListener('click', onContainerClick);
 containerLib.removeEventListener('click', onLibruaryCardClick);
}

// function onLogoClick(e) {
//   e.preventDefault();
//   onShowHome();
// }

// function onHomeBtnClick(e) {
//   e.preventDefault();
//   onShowHome();
// }

// function onMyLybraryBtnClick(e) {
//   e.preventDefault();
//   onShowMyLibrary();
// }

function onWatchedBtnClickActipn() {
  if (queueBtn.classList.contains('active-btn')) {
    queueBtn.classList.remove('active-btn');
  }
  watchedBtn.classList.add('active-btn');
}

function onQueueBtnClickActipn() {
  if (watchedBtn.classList.contains('active-btn')) {
    watchedBtn.classList.remove('active-btn');
  }
  queueBtn.classList.add('active-btn');
}

export { onShowMyLibrary, onShowHome, onWatchedBtnClickActipn, onQueueBtnClickActipn };
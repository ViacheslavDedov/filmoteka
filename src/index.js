import { renderList } from './js/render-list';
import { getRefs } from './js/get-refs';
import darkTheme from './js/dark-theme';
import { onShowMyLibrary, onShowHome, onWatchedBtnClickActipn } from './js/header';
import './js/pagination';
import './js/film-find';
import './js/up-btn';
import './js/library-pagination';
import ApiService from './js/api';
import { paginationTotalItems } from './js/pagination';
import { onFooterClick } from './js/modal-footer';
import { onContainerClick } from './js/modal-movie';
import {linkGanresClear} from './js/ganres-meny'

// AUTH IMPORTS
import { singInClick, singOutClick } from './js/login';
import authState from './js/auth-state';
import { getQueueFilms, getWatchedFilms, delFilmFromFirebase } from './js/user-data';
import { onWatchedBtnClick } from './js/library-pagination';

const apiData = new ApiService();
const container = getRefs().gallery;
const mainCard = getRefs().linkCard;
const foterLink = getRefs().footerLink;
const restLinks = getRefs().restLink;

authState();
darkTheme();
// delFilmFromFirebase();
getWatchedFilms();
getQueueFilms();

// Top movies
function topMoviesRender() {
  container.innerHTML = '';
  apiData.getTopMovies().then(({ results, total_results }) => {
    if (total_results > 19980) total_results = 19980;
    paginationTotalItems(total_results);
    renderList(results, container);
  });
}
topMoviesRender();
localStorage.removeItem('markerBy');

// Main movie
container.addEventListener('click', onContainerClick);

// Footer link
foterLink.addEventListener('click', onFooterClick);

// Listiners
getRefs().logo.addEventListener('click', onLogoClick);
getRefs().homeBtn.addEventListener('click', onHomeBtnClick);
getRefs().myLibraryBtn.addEventListener('click', onMyLybraryBtnClick);
getRefs().loginBtn.addEventListener('click', singInClick)
getRefs().logoutBtn.addEventListener('click', singOutClick)

// Header functions
function onLogoClick(e) {
  e.preventDefault();
  onShowHome();
  topMoviesRender();
  localStorage.removeItem('markerBy');
   linkGanresClear(restLinks);
  getRefs().pagination.classList.remove('pagination-off');
}

function onHomeBtnClick(e) {
  e.preventDefault();
  onShowHome();
  topMoviesRender();
  localStorage.removeItem('markerBy');
  linkGanresClear(restLinks);
  getRefs().pagination.classList.remove('pagination-off');
}

function onMyLybraryBtnClick(e) {
  e.preventDefault();
  onShowMyLibrary();
  linkGanresClear(restLinks);
  container.innerHTML = '';
  getRefs().pagination.classList.add('pagination-off');
  onWatchedBtnClick();
}


export { topMoviesRender };
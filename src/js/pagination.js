import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { renderList } from './render-list';
// import { renderMarkup } from './film-find';
import { getRefs } from './get-refs';
import { queryForTui } from './film-find';
import { processingStorage } from './library-pagination';
import { ganresForTui } from './ganres-meny';

const container = getRefs().gallery;
export const containerTui = document.getElementById('tui-pagination-container');

let value = '';
let currentPage = 1;
const API_KEY = '419c8d7d79cbcac22c5520f1ac14d2c7';
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(containerTui, options);

pagination.on('afterMove', e => {
  currentPage = e.page;
  container.innerHTML = '';
  getRefs().pagination.classList.remove('pagination-off');

  let markerBy = localStorage.getItem('markerBy');

  switch (markerBy) {
    case 'ganres':
      value = ganresForTui;
      console.log(ganresForTui);
      paginationSearch(
        `${BASE_URL}/discover/movie?&page=${currentPage}&with_genres=${value}&api_key=${API_KEY}`
        );
        // &sort_by=popularity.desc&include_adult=false
      break;
    case 'queue':
      processingStorage('queue', currentPage);
      break;
    case  'watched':
      processingStorage('watched', currentPage);
      break;
    case 'search':
      value = queryForTui;
      console.log(queryForTui);
      paginationSearch(
      `${BASE_URL}/search/movie?&query=${value}&page=${currentPage}&api_key=${API_KEY}`
      );
      break;
    default:
      paginationSearch(
        `${BASE_URL}/trending/movie/week?page=${currentPage}&api_key=${API_KEY}`
      );
  }
  return currentPage;
});

async function paginationSearch(url) {
  try {
    Loading.arrows({
      svgColor: '#ff6b08',
      backgroundColor: 'rgba(0,0,0,0.25)',
      cssAnimation: true,
      cssAnimationDuration: 2000,
      clickToClose: true,
    });
    const data = await axios.get(url);
    const result = await data.data;
    const results = await result.results;
    renderList(results, container);
    // renderMarkup(results, container);
     Loading.remove();
     getRefs().pagination.classList.remove('pagination-off');
  } catch (error) {
    console.error(error);
  }
}

function paginationTotalItems(n) {
  pagination.reset(n);
  pagination._paginate(1);
}

export { pagination, paginationTotalItems };

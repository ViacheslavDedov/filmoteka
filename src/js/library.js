// import { getRefs } from './get-refs';
// import axios from "axios";


// import ApiService from './api';
// import { onClickToAddToQueueBtn } from './modal-movie';
// import noImg from '../images/no-poster-available.jpeg';
// import { genresAddOthers } from './genres';

import ApiService from './api';
import { onClickToAddToQueueBtn } from './modal-movie';
import noImg from '../images/no-poster-available.jpeg';
import { genresAddOthers } from './genres'; 
// Firebase import

// Firebase films collections


// const watchedBtn = document.querySelector('.js-watched-btn');
// const queuedBtn = getRefs().queueBtn;
// // const libraryPage = document.querySelector('.films__library__page')
// // const homeButton = getRefs().homeBtn;
// const container = getRefs().gallery

// let watchedFilms = [];
// let queuedFilms = [];
// const films = {};



// let ADD_TO_WATCHED_FILM_L = "add-to-watched-film";
// let ADD_TO_QUEUE_FILM_L = "add-to-queue-film";

// watchedBtn.addEventListener('click', onWatchedBtnClick);
// queuedBtn.addEventListener('click', onQueuedBtnClick);
// // homeButton.addEventListener('click', onHomeBtnClickn);

// // function onHomeBtnClickn(evt) {
// //     libraryPage.classList.add('js-is-hidden');
// // }

// export function onWatchedBtnClick(evt) {
//     evt.preventDefault();
//     // watchedFilms = JSON.parse(localStorage.getItem(ADD_TO_WATCHED_FILM_L));
//     // console.log(watchedFilms);
//     container.innerHTML = "";
//      renderLibrary(getWatchedFilms, container);
// }

// export function onQueuedBtnClick(evt) {
//     evt.preventDefault();
//     queuedFilms = JSON.parse(localStorage.getItem(ADD_TO_QUEUE_FILM_L));
//    container.innerHTML = "";
//     console.log(queuedFilms);
//     renderLibrary(queuedFilms);
// }


//  function renderGenres(genre_ids) {
//   return genresAddOthers(genre_ids)
//     .map(genre => `<li class="movie-genres">${genre}</li>`)
//     .join(' ,');
// }

// function renderLibrary(films) {


//     const markup = films.map(({ original_title, poster_path, release_date, genre_ids, vote_average }) => {

//         let genres = renderGenres(genre_ids);

//         return `<li class="films__list">
//         <a class="films__id" data-id="">
//   <div class="film__photo__card">

//   <picture class="films__pictures__thumb">


//         <source class="lazy_image" media="(min-width: 1200px)"
//         srcset=""  type="image/jpeg" width="310" height="450"  data-src="https://themoviedb.org/t/p/w500${poster_path} 1x,https://themoviedb.org/t/p/w500${poster_path} 2x">


//         <source class="lazy_image" media="(min-width: 768px)"
//          srcset=""  type="image/jpeg" width="335" height="455"  data-src="https://themoviedb.org/t/p/w500${poster_path} 1x,https://themoviedb.org/t/p/w500${poster_path} 2x">


//         <source class="lazy_image" media="(max-width: 767px)"
//          srcset=""  type="image/jpeg" width="280" height="400"  data-src="https://themoviedb.org/t/p/w500${poster_path} 1x,https://themoviedb.org/t/p/w500${poster_path} 2x">


//                     <img
//                         src="https://themoviedb.org/t/p/w500${poster_path}"
//                         alt="${original_title}"
//                         loading="lazy"
//                         class="film__picture"
//                     />
//                 </picture>
//   <div class="film__info">


//                 <div class="film__info">
//                     <h2 class="film__title">${original_title}</h2>
//                     <div class="film__description">
//                       <ul class="film__genres__list">
//                      ${genres}
//                       </ul>
//                       <p class="film__release__date">${releaseDate(release_date)}</p>
//                       <p class="film__vote">${vote_average}</p>
//                     </div>
//                 </div>
//   </div>
// </div>
// </a></li>
//         `}).join('');
//     container.insertAdjacentHTML("beforeend", markup);
// }

//  function releaseDate(year) {
//     if (!year)  'No data';
//     return year.slice(0, 4);
// }

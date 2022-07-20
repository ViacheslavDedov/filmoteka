import noImg from '../images/no-poster-available.jpeg';
import { genresAddOthers } from './genres';

function renderGenres(genre_ids) {
  return genresAddOthers(genre_ids)
    .map(genre => `<li class="movie-genres">${genre}</li>`)
    .join(' ,');
}

export function renderList(hits, container) {
  const markup = hits
    .map(({ id, poster_path, original_title, genre_ids, release_date }) => {
      let genres = renderGenres(genre_ids);

      return `<li class="card-list"><a class="post" data-id=${id}>

  <div class="photo-card">

  <picture class="poster-thumb">


        <source class="lzy_img" media="(min-width: 1200px)"
        srcset=""  type="image/jpeg" width="310" height="450"  data-src="${poster_path} 1x,${poster_path} 2x">


        <source class="lzy_img" media="(min-width: 768px)"
         srcset=""  type="image/jpeg" width="335" height="455"  data-src= "${poster_path} 1x,${poster_path} 2x">


        <source class="lzy_img" media="(max-width: 767px)"
         srcset=""  type="image/jpeg" width="280" height="400"  data-src= "${poster_path} 1x,${poster_path} 2x">


                    <img
                        src="${posterPath(poster_path)}"
                        alt="${original_title}"
                        loading="lazy"
                        class="poster"
                    />
                </picture>
  <div class="info">


                <div class="movie-info">
                    <h2 class="movie-title">${original_title}</h2>
                    <div class="movie-description">
                      <ul class="genres-list">
                      ${genres}
                      </ul>
                      <p class="movie-date">${releaseDate(release_date)}</p>
                    </div>
                </div>
  </div>
</div>
</a></li> 
        `;
    })
    .join('');
  container.insertAdjacentHTML('beforeend', markup);
}

function releaseDate(year) {
  if (!year) return 'No data';
  return year.slice(0, 4);
}

function posterPath(poster) {
  if (poster === null) {
    return noImg;
  }
  return `https://image.tmdb.org/t/p/w500${poster}`;
}


import ApiService from './api';
import { renderList } from './render-list';
import { paginationTotalItems } from './pagination';
import { getRefs } from './get-refs';
import { onShowHome } from './header';
import { topMoviesRender } from '..';
const getFilm = new ApiService();
const galleryList = getRefs().gallery;

export let ganresForTui = '';
export default (() => {
    const productsBtnRef = document.querySelector("[data-open-products]");
    const productListRef = document.querySelector("[data-modal-products]");

    productsBtnRef.addEventListener("click", () => {
        const expanded =
            productsBtnRef.getAttribute("aria-expanded") === "true" || false;

        productsBtnRef.classList.toggle("is-open");
        productsBtnRef.setAttribute("aria-expanded", !expanded);

        productListRef.classList.toggle("is-open");

    });
})();

const ganreList = document.querySelector('.ganres__list');
ganreList.addEventListener('click', ganreSelekt)
function ganreSelekt(evt) {
      onShowHome();
      topMoviesRender();
    const currentGanre = evt.target.closest('li').firstChild.dataset.name;
    getRefs().pagination.classList.add('pagination-off');
    onLinkSubmit(currentGanre);
    localStorage.removeItem('markerBy');
    localStorage.setItem('markerBy', 'ganres');

    if (currentGanre) {
const activLink = evt.target.closest('li').firstChild;
const restLinks = getRefs().restLink;
linkGanresClear(restLinks)
activLink.classList.add('active');
    }
}
export function linkGanresClear(restLinks) {
   restLinks.forEach((item)=>item.classList.remove('active'))
}
let genresData = [];
let idGanres = 0;
let ganreArray = [];
let markup = [];
function onLinkSubmit(currentGanre) {
    galleryList.innerHTML = "";
    markup = [];
    renderGenres(currentGanre)
    function renderGenres(currentGanre) {

        getFilm.getGanres().then(({ genres }) => {
            genresData = genres;
            idGanres = genresData.find((item) => {
                if (item.name === currentGanre) {
                    return item.name; 
                }
                        getFilm.resetPage();
                        getFilm.getSearchMovies(currentGanre).then(({ results, total_results})=>{
                            results.map((items) => {
                    ganreArray = items.genre_ids;
                    ganreArray.find((item) => {
                        if (item === idGanres.id) {
                            markup.push(items);
                            if (markup.length ===20) {
                               galleryList.innerHTML = '';
                            return renderList(markup, galleryList);  
                            }
                               if (markup.length>20) {
                            return 
                            }
                        }
                    })
                })})
            });

            getFilm.getTopMovies().then(({ results, total_results }) => {
                if (total_results > 20) {
                  if (total_results > 19980) total_results = 19980;
                  paginationTotalItems(total_results);
                  ganresForTui = idGanres.id;
                  getRefs().pagination.classList.remove('pagination-off');
                }
                results.map((items) => {
                    ganreArray = items.genre_ids;
                    ganreArray.find((item) => {
                        if (item === idGanres.id) {
                            markup.push(items);
                            if (markup.length ===20) {
                               galleryList.innerHTML = '';
                            return renderList(markup, galleryList);  
                            }
                               if (markup.length>20) {
                            return 
                            }
                        }
                    })
                })

            });
        });
    }
    ganreList.classList.remove('is-open');
}

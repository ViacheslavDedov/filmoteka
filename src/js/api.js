import axios from 'axios';
import { Loading } from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = '419c8d7d79cbcac22c5520f1ac14d2c7';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: 'false',
};
export default class ApiService {
  constructor() {
    this.value = '';
    this.page = 1;
  }

  async getTopMovies() {
       try {
        Loading.standard();
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?page=${this.page}`
      );
      Loading.remove();
      return data;
      } 
      catch {
      Notify.failure('Oops something went wrong');
    }
  }

  async getSearchMovies(searchQuery) {
    try {
      Loading.standard();
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?&query=${searchQuery}`
      );
      this.page += 1;
      Loading.remove();
      return data;
    } catch {
      Notify.failure('Oops something went wrong');
    }
  }

  async getGanres() {
    try {
      Loading.standard();
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?`
      );
      Loading.remove();
      return data;
    } catch {
      Notify.failure('Oops something went wrong');
    }
  }

  async getMainMovie(value) {
    try {
      Loading.standard();
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${value}?`
      );
      const base = await {
        title: data.original_title,
        genres: data.genres,
        id: data.id,
        date: data.release_date,
        poster: data.poster_path,
        about: data.overview,
        populanty: data.popularity,
        vote: data.vote_average,
        votes: data.vote_count,
      };
      Loading.remove();
      return base;
    } catch {
      Notify.failure('Oops something went wrong');
    }
  }
  resetPage() {
    this.page += 1;
  }
  get query() {
    return this.value;
  }
  set query(newQuery) {
    this.searchQuery = value;
  }
}

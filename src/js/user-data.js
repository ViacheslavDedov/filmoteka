import db from './firebase';
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// GET COLLECTION REF
// const colRef = collection(db, userId);
let watchedFilms = [];
let queueFilms = [];

// FILMS COLLECTIONS
function getWatchedFilms() {
  let colRef = null;
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      colRef = collection(db, uid);
      const watchedQuery = query(colRef, where('type', '==', 'watched'));

      onSnapshot(watchedQuery, snapshot => {
        watchedFilms = [];
        snapshot.docs.forEach(doc => {
          watchedFilms.push({ ...doc.data(), id: doc.id });
        });
        // console.log(watchedFilms);
      });
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return watchedFilms;
}

function getQueueFilms() {
  let colRef = null;
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      colRef = collection(db, uid);
      const queueQuery = query(colRef, where('type', '==', 'queue'));

      onSnapshot(queueQuery, snapshot => {
        queueFilms = [];
        snapshot.docs.forEach(doc => {
          queueFilms.push({ ...doc.data(), id: doc.id });
        });
        // console.log(queueFilms);
      });

      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return queueFilms;
}

function getUserName() {
  // let colRef = null;
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const userName = user.displayName;
      const userNameContainer = document.querySelector('.theme__user-name');

      let firstName = userName.split(' ')[0];
      userNameContainer.textContent = `Hello  ${firstName}`;
      userNameContainer.classList.remove('is-hidden');
    } else {
      // User is signed out
      // ...
    }
  });
}

// ADD DOCUMENTS TO COLLECTION
function addFilmToFirebase(filmType, currentMovieInfo) {
  let colRef = null;
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      colRef = collection(db, uid);

      addDoc(colRef, {
        type: filmType,
        filmid: currentMovieInfo.id,
        original_title: currentMovieInfo.original_title,
        release_date: currentMovieInfo.release_date,
        poster_path: currentMovieInfo.poster_path,
        genre_ids: currentMovieInfo.genre_ids,
        vote_average: currentMovieInfo.vote_average,
        vote_count: currentMovieInfo.vote_count,
      });

      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

// DELETING DOCUMENTS
// function delFilmFromFirebase() {
//   const docRef = doc(db, userId, 'dFct0oY6Cg3vilIBLo96');
//   deleteDoc(docRef);
//   // .then(() => {
//   // })
// }

export {
  addFilmToFirebase,
  // delFilmFromFirebase,
  getWatchedFilms,
  getQueueFilms,
  watchedFilms,
  queueFilms,
  getUserName,
};

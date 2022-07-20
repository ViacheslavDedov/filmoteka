import { auth } from './firebase';
import { onLogoutShow, onLoginShow } from './login';
import { getUserName } from './user-data';

export function authState() {
  let authData = {};

  auth.onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      onLogoutShow();
      getUserName();

      return;
    }

    onLoginShow();
  });
}

export default authState;

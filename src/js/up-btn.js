import { getRefs } from './get-refs';

const upBtn = getRefs().upBtn;
upBtn.addEventListener('click', upFunction);

window.onscroll = function () {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    upBtn.style.display = 'block';
  } else {
    upBtn.style.display = 'none';
  }
};


function upFunction() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -20);
    setTimeout(upFunction, 0);
  }
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}

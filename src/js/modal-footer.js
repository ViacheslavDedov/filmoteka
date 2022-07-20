import * as basicLightbox from 'basiclightbox';
import KravchukOleksandr from '../images/KravchukOleksandr-2.jpg';
import KolischukOleg from '../images/KolischukOleg-2.jpg';
import AndriietsHryhorii from '../images/AndriietsHryhorii-2.jpg';
import SmychenkoOleksiy from '../images/SmychenkoOleksiy-2.jpg';
import DedovViacheslav from '../images/DedovViacheslav-2.jpg';
import YankoDmitriy from '../images/YankoDmitriy-2.jpg';
import TetianaMyslynska from '../images/TetianaMyslynska-2.jpg';
import SkrytskaIrina from '../images/SkrytskaIrina-2.jpg';
import KuzkinaOlga from '../images/KuzkinaOlga-2.jpg';
import iconGithub from '../images/github.svg';
import oskar from '../images/oskar.jpg';

export function onFooterClick(event) {
  event.preventDefault();
  window.addEventListener('keydown', onFooterClose);
  const renderFooter = basicLightbox.create(`
       <div class="footer-modal">
      <button data-action="close" class="modal__close-button-footer"> </button>
     <ul class="footer-team__list">
     <li class="footer-team__item">

     <img class="footer-team__pic" src=${KravchukOleksandr} alt="KravchukOleksandr" >

     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/AleksandroKravchuk" class="footer-team__name">Kravchuk Oleksandr</a>
     <a target="_blank" href="https://www.linkedin.com/in/oleksandr-kravchuk-44b941231/" class="footer-team__prof">Team Leader</a>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${KolischukOleg} alt="Kolischuk Oleg" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/Ohleh" class="footer-team__name">Kolischuk Oleg</a>
       <a target="_blank" href="https://www.linkedin.com/in/ohleh/" class="footer-team__prof">Scrum Master</a>
    </div>
     </li>

          <li class="footer-team__item">
     <img class="footer-team__pic"  src=${SkrytskaIrina} alt="SkrytskaIrina" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/IrinaSkrytska" class="footer-team__name">Skrytska Irina</a>
     <a target="_blank" href="https://www.linkedin.com/in/irina-skrytska-93a32b243/" class="footer-team__prof">Developer</a>

    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${AndriietsHryhorii} alt="AndriietsHryhorii" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/HryhoriiAndriiets1974" class="footer-team__name">Andriiets Hryhorii</a>
      <a target="_blank" href="https://www.linkedin.com/in/%D0%B3%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D1%96%D0%B9-%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D1%94%D1%86%D1%8C-072368120/" class="footer-team__prof">Developer</a>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${SmychenkoOleksiy} alt="Smychenko Oleksiy" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/alfrntlower" class="footer-team__name">Smychenko Oleksiy</a>
     <a target="_blank" href="https://www.linkedin.com/in/aleksey-smychenko-b91632197/" class="footer-team__prof">Developer</a>

    </div>
     </li>
          <li class="footer-team__item">
     <img class="footer-team__pic"  src=${TetianaMyslynska} alt="TetianaMyslynska" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/TetianaMyslynska" class="footer-team__name">Myslynska Tetiana</a>
        <a target="_blank" href="https://www.linkedin.com/in/tanya-mislinska-4a76a7162/" class="footer-team__prof">Developer</a>

    </div>
     </li>

     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${DedovViacheslav} alt="DedovViacheslav" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/ViacheslavDedov" class="footer-team__name">Dedov Viacheslav</a>
     <a target="_blank" href="https://www.linkedin.com/in/viacheslav-dedov/" class="footer-team__prof">Developer</a>

    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${YankoDmitriy} alt="YankoDmitriy" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/yanko-dima" class="footer-team__name">Yanko Dmitriy</a>
     <a target="_blank" href="https://www.linkedin.com/in/dima-yanko-118413147/" class="footer-team__prof">Developer</a>

    </div>
     </li>

     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${KuzkinaOlga} alt="KuzkinaOlga" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/KuzkinaOlga" class="footer-team__name">Kuzkina Olga</a>
     <a target="_blank" href="https://www.linkedin.com/in/olga-kuzkina-969756110/" class="footer-team__prof">Developer</a>
    </div>
     </li>

    </div>`);
  renderFooter.show();
  const btnFooterClose = document.querySelector([
    'button[data-action="close"]',
  ]);
  btnFooterClose.addEventListener('click', onButtonClose);
  function onFooterClose(event) {
    if (event.code === 'Escape') {
      renderFooter.close();
      window.removeEventListener('keydown', onFooterClose);
      btnFooterClose.removeEventListener('click', onButtonClose);
    }
  }
  function onButtonClose() {
    renderFooter.close();
  }
}

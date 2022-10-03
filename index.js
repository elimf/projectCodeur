
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
//navbar
document.querySelector("#navbar").innerHTML = ` <div class="container">

        <img src="assets/img/zebi.svg" alt="" style="width:3rem">

         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg></span>
         </button>
         <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
               <li class="nav-item">
                  <a class="nav-link" href="#presentation">Qui suis-je ?</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#compet">Compétences</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#projetP">Projets</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#contact">Contact</a>
               </li>
               <li class="nav-item last">
                     <div class="darkmode-toggle-wrapper">
         <input type="checkbox" id="darkmode-toggle" aria-label="dark mode toggle" class="darkmode-toggle-checkbox">
         <div class="darkmode-toggle-circle">
         </div>
         <span class="darkmode-toggle-emoji">🌚</span>
         <span class="darkmode-toggle-emoji">🌞</span>
      </div>
               </li>
            </ul>
         </div>
      </div>`;

//Footer
document.querySelector("#footer").innerHTML = ` <div class="container py-5 ">
            <div class="row gy-4">
               <div class="col-4 col-md-4">
                  <img src="assets/img/zebi.svg" alt="" style="width:3rem">
               </div>
               <div id="mentionlegal"class="col-4 col-md-4 text-md-center" >
                  
                  </div class="w-100">
                  <div class="col-4 col-md-4 text-md-end ">
                     <ul class="list-inline">
                        <li class="list-inline-item ">
                           <a href="https://www.linkedin.com/in/elimflorvil" target="_blank" class="text-decoration-none " data-bs-toggle="tooltip" title="LinkendIn" > <i class="bi bi-linkedin " ></i></a>
                        </li>
                        <li class="list-inline-item">
                           <a href="https://github.com/elimf" target=”_blank” class="text-decoration-none " data-bs-toggle="tooltip" title="Github"> <i class="bi bi-github"></i></a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>`;

//MENTION LEGALE
document.querySelector(
    "#mentionlegal"
).innerHTML = ` <button type="button" class="btn text-info " data-bs-toggle="modal" data-bs-target="#mention">Mentions Légales</button>
                  <div class="modal fade" id="mention" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div class="modal-dialog">
                        <div class="modal-content">
                           <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Mentions Légales</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                           </div>
                           <div class="modal-body">
                              <p>Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. 
                                 En vous connectant sur ce site, vous acceptez, sans réserves, les présentes modalités.
                                 Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables du présent site internet 
                                 <a href="https://elimf.github.io/"></a>  sont :
                              </p>
                              <h3>Éditeur du Site :</h3>
                              <p>
                                 Responsable éditorial : Elim FLORVIL
                              </p>
                              <h3>Conditions d’utilisation :</h3>
                              <p> Ce site est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort d’utilisation et un graphisme plus agréable. <br>
                                 Nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome, etc… <br>
                                 L’agence web AntheDesign met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de ses sites internet. <br>
                                 Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations auprès de AntheDesign , et signaler toutes modifications du site qu’il jugerait utile. <br>
                                 AntheDesign n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
                              </p>
                              <h3>Cookies :</h3>
                              <p> Le site peut-être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d’affichage. <br>
                                 Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. <br>
                                 Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations . <br>
                                 Certaines parties de ce site ne peuvent être fonctionnelles sans l’acceptation de cookies.
                              </p>
                              <h3>Liens hypertextes :</h3>
                              <p>Les sites internet de peuvent offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. SARL ANTHEDESIGN ne dispose d’aucun moyen pour contrôler les sites en connexion avec ses sites internet.
                                 AntheDesign ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l’internaute, qui doit se conformer à leurs conditions d’utilisation.
                                 Les utilisateurs, les abonnés et les visiteurs des sites internet  ne peuvent pas mettre en place un hyperlien en direction de ce site sans l’autorisation expresse et préalable de SARL ANTHEDESIGN.
                                 Dans l’hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en direction d’un des sites internet de SARL ANTHEDESIGN, il lui appartiendra d’adresser un email accessible sur le site afin de formuler sa demande de mise en place d’un hyperlien.
                                 La SARL ANTHEDESIGN se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.
                              </p>
                              <h3>Services fournis :</h3>
                              <p>L’ensemble des activités de la société ainsi que ses informations sont présentés sur notre site.
                                 Le site s’efforce de fournir sur le site  des informations aussi précises que possible. 
                                 Les renseignements figurant sur le site  ne sont pas exhaustifs et les photos non contractuelles.
                                 Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. 
                                 Par ailleurs, tous les informations indiquées sur le site www.anthedesign.fr sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>`;

$(document).ready(function() {

  $('.flipper').on('click', function () {
    $(this).find('.flipper-card').toggleClass('flipper-is-flipped');
  });

});
const darkmodeToggle = document.querySelector("#darkmode-toggle");
const navbar = document.querySelector("nav");
const modal = document.querySelector(".modal-content");


/* css customprops detect the default automatically, but this makes sure the starting switch position also corresponds */
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  darkmodeToggle.checked = true;
}

/* These classes are for when a user decides to not go with their default setting */
darkmodeToggle.addEventListener("change", () => {
  if (darkmodeToggle.checked) {

    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
    navbar.classList.add("darkmode");
   navbar.classList.remove("lightmode");
   modal.classList.add("darkmode");
    modal.classList.remove("lightmode");
  } else {
    document.body.classList.remove("darkmode");
    document.body.classList.add("lightmode");
   navbar.classList.add("lightmode");
   navbar.classList.remove("darkmode");
   modal.classList.add("lightmode");
    modal.classList.remove("darkmode");
  }
});
JSONtoDisplay();
function JSONtoDisplay() {
    const data = import("./data.json", {
        assert: {
            type: "json",
        },
    });

    var element = document.querySelector("#cartes");
    element.querySelectorAll(".projetter");
    data.then((d) =>
        d.default.forEach((projet) => {
            var projetOriginal = document.querySelector(".projetter");
            var newprojet = projetOriginal.cloneNode(true);
            newprojet.classList.remove("d-none");
            newprojet.querySelector(
                ".card-title"
            ).innerHTML = `${projet.titre}`;
            newprojet.querySelector(".flipper-front").style.backgroundImage = `url('assets/${projet.image}')`;
            newprojet.querySelector(".flipper").addEventListener("click", function() {
 $(this).find('.flipper-card').toggleClass('flipper-is-flipped');
});
            // newprojet.querySelector(
            //     ".card-text"
            // ).innerHTML = `${projet.intitule}`;
            // newprojet.querySelector(
            //     ".imageTar"
            // ).innerHTML = `<img src="${projet.image}" class=" card-img-top w-100 " alt="logo de la formation">`;
            // newprojet
            //     .querySelector(".btn-primary")
            //     .removeAttribute("data-bs-target");
            // newprojet
            //     .querySelector(".btn-primary")
            //     .setAttribute("data-bs-target", projet.lien);
            // newprojet.querySelector(".offcanvas-bottom").removeAttribute("id");
            // newprojet
            //     .querySelector(".offcanvas-bottom")
            //     .setAttribute("id", projet.id);
            // newprojet.querySelector(
            //     ".card-description"
            // ).innerHTML = `${projet.description}`;
            if (projet.video == "vide") {
                newprojet.querySelector(
                    ".flipper-video"
                ).innerHTML = `<img style="width: 100%;"src="assets/${projet.img2}" >`;
            } else {
                newprojet.querySelector(
                    ".flipper-video"
                ).innerHTML = `<video loop autoplay style="width: 80%" controls>
                                             <source src="assets/${projet.video}" type="video/mp4">
                                          </video>`;
             }
            newprojet.querySelector(
                ".githublink"
            ).innerHTML = ` <a class="button-three" href="${projet.git}" target="_blank" rel="noopener noreferrer">Lien Github</a>`;
            document.querySelector("#cartes").append(newprojet); 
        })
    );
}



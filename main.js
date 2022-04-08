var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
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
             newprojet.style.display ='flex';
             newprojet.querySelector(".card-title").innerHTML = `${projet.titre}`;
             newprojet.querySelector(".card-text").innerHTML = `${projet.intitule}`;
             newprojet.querySelector(".offcanvas-title").innerHTML = `${projet.titre}`;
             newprojet.querySelector(".imageTar").innerHTML = `<img src="${projet.image}" class=" card-img-top w-100 " alt="logo de la formation">`;
             newprojet.querySelector(".btn-primary").removeAttribute("data-bs-target");
             newprojet.querySelector(".btn-primary").setAttribute("data-bs-target",projet.lien);
             newprojet.querySelector(".offcanvas-bottom").removeAttribute("id");
             newprojet.querySelector(".offcanvas-bottom").setAttribute("id",projet.id);
             newprojet.querySelector(".card-description").innerHTML = `${projet.description}`;
             if (projet.video == "vide") {
                  newprojet.querySelector(
                      ".card-video"
                  ).innerHTML = `<h3>Les documents relatifs a ce projet sont en cours d'élaboration.</h3><img src="${projet.img2}" >`;
             }else{
                   newprojet.querySelector(
                       ".card-video"
                   ).innerHTML = `<video style="height: 400px;" controls>
                                             <source src="${projet.video}" type="video/mp4">
                                          </video>`;
             }
              newprojet.querySelector(
                  ".githublink"
              ).innerHTML = ` <a  class="btn btn-danger" href="${projet.git}" target="_blank" rel="noopener noreferrer">Github</a>`;
             document.querySelector("#cartes").append(newprojet);//
        })
    );

    // adding carte to screen
    // if (data != null) {
    //     data.default.forEach((carte) => {
    //         let newprojet = projetOriginal.cloneNode(true);

    //         newprojet.querySelector(
    //             ".carteNom"
    //         ).innerHTML = `<p>${carte.nom}</p>`;
    //         newprojet.querySelector(
    //             ".cartePrix"
    //         ).innerHTML = `<p>${carte.prix}€</p>`;
    //         newprojet.querySelector(
    //             ".carteStock"
    //         ).innerHTML = `<p>${carte.stock}</p>`;
    //         newprojet.querySelector(
    //             ".carteLogo"
    //         ).innerHTML = `<img src="${carte.imagePath}" alt="logo de la formation">`;

    //         let etoiles = "";
    //         for (var i = 0; i < 5; i++) {
    //             if (i < carte.vote) etoiles += "★";
    //             else etoiles += "☆";
    //         }

    //         newprojet.querySelector(
    //             ".carteEvaluation"
    //         ).innerHTML = `<p>${etoiles}</p>`;

    //         document.querySelector("#Cartes").appendChild(newprojet);
    //     });

    // }
}
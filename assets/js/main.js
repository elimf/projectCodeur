(function () {
  "use strict";
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  };

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let body = select("body");
        if (body.classList.contains("mobile-nav-active")) {
          body.classList.remove("mobile-nav-active");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Hero type effect
   */
  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select(".skills-content");
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: "80%",
      handler: function (direction) {
        let progress = select(".progress .progress-bar", true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Initiate portfolio details lightbox
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: ".portfolio-details-lightbox",
    width: "90%",
    height: "90vh",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();
})();

var demoJson = {
  demo: {
    sidebar: {
      accueil: {
        fr: "Accueil",
        en: "Home",
      },
      apropos: {
        fr: "A propos",
        en: "About",
      },
      resume: {
        fr: "Résumé",
        en: "Summary",
      },
      projet: {
        fr: "Projets",
        en: "Projects",
      },
      contact: {
        fr: "Contact",
        en: "Contact",
      },
    },
    home: {
      title: {
        text: {
          fr: "Je suis Dévelopeur",
          en: "I'm Developer",
        },
      },
    },
    about: {
      date: {
        title: {
          fr: "Date de naissance :",
          en: "Date of Birth :",
        },
        num: {
          fr: "12 Mai 2001",
          en: "12 May 2001",
        },
      },
      telephone: {
        fr: "Numéro :",
        en: "Phone :",
      },
      city: {
        fr: "Ville :",
        en: "City :",
      },
      years: {
        fr: "Age :",
        en: "Years :",
      },
      degree: {
        fr: "Diplôme :",
        en: "Degree :",
      },
      mail: {
        fr: "E-mail :",
        en: "Mail :",
      },
      resume: {
        fr: "Je prépare un titre certifié d’analyste développeur d’applications informatiques à la Coding Factory. De plus, j'essaye de me perfectioner à travers de petits projets afin de consolider mes bases sur mon temps libre ce qui me permettra à long terme d'être un développeur fullstack complet.",
        en: "I am preparing a certified analyst title computer application developer at the Coding Factory. Moreover, I try to perfect myself through small projects in order to consolidate my bases on my free time which will allow me in the long term to be a complete fullstack developer.",
      },
    },
    skils: {
      fr: "Compétences",
      en: "Skils",
    },
    resume: {
      sum: {
        fr: "Voici un bref aperçu de ma formation et mon expérience professionels dans le monde l'informatique",
        en: "Here is a brief overview of my training and professional experience in the computer world",
      },
      paragraphe: {
        fr: "Passionné par l'informatique depuis mon plus jeune age, j'ai entrepris plusieurs projet afin d'acquérir en compétences",
        en: "Passionate about computers since my youngest age, I undertook several projects in order to acquire skills.",
      },
      formation: {
        title: {
          fr: "Formation",
          en: "Education",
        },
        location: {
          fr: "Coding Factory de ESIEE-IT | Cergy",
          en: "Coding Factory of ESIEE-IT | Cergy",
        },
        sous_title: {
          fr: "Préparation du titre certifié d’analyste développeur d’applications informatiques BAC+2",
          en: "Preparation of the certified title of analyst developer of computer applications BAC + 2",
        },
        location2: {
          fr: "Cy Cergy Paris Université | Cergy-Pontoise",
          en: "Cy Cergy Paris University | Cergy-Pontoise",
        },
        sous_title2: {
          fr: "Préparation Licence Mathématiques Informatique Physique Ingénierie",
          en: "Preparation License Mathematics Computer Science Physics Engineering ",
        },
        location3: {
          fr: "Lycée Jules Ferry | Conflans Sainte Honorine",
          en: "Jules Ferry High School | Conflans-Sainte-Honorine",
        },
        sous_title3: {
          fr: "Baccalauréat Scientifique option Informatique et Sciences du Numérique",
          en: "Scientific Baccalaureate option Computer Science and Digital Sciences",
        },
      },
      experience: {
        title: {
          fr: "Experiences Professionelles",
          en: "Professional Experience",
        },
        sous_title: {
          fr: "Développeur fullstack en alternance",
          en: "Part-time fullstack developer",
        },
        task1: {
          fr: "Création et mise en place d'une API en Symfony pour une application mobile développé en Flutter",
          en: "Creation and implementation of an API in symfony for a mobile application developed in Flutter",
        },
        task2: {
          fr: "Développement d'un site web responsive ",
          en: "Development of a responsive website",
        },
        task3: {
          fr: "Documentation API",
          en: "Documentation for the API",
        },
        task4: {
          fr: "Création d'un espace admin dans l'application mobile",
          en: "Creation of an admin space in the mobile application",
        },
      },
    },
    projet: {
      sum: {
        fr: "Bienvenue dans la partie projet du portfolio, ici vous allez pourvoir apercevoir toutes les projets que j'ai effectué lors de ma formation ou pendant mon temps personels",
        en: "Welcome to the project part of the portfolio, here you will be able to see all the projects I have done during my training or during my personal time.",
      },
      paragraphe: {
        fr: "Passionné par l'informatique depuis mon plus jeune age, j'ai entrepris plusieurs projet afin d'acquérir en compétences",
        en: "Passionate about computers since my youngest age, I undertook several projects in order to acquire skills.",
      },
    },
    form: {
      name: {
        fr: "Zé dos Anzóis",
        en: "John Doe",
      },
      email: {
        fr: "zeanzois@email.org",
        en: "johndoe@email.org",
      },
      submit: {
        fr: "Enviar",
        en: "Send",
      },
    },
  },
};

(function () {
  this.I18n = function (defaultLang) {
    var lang = defaultLang || "fr";
    this.language = lang;

    (function (i18n) {
      i18n.contents = demoJson;
      i18n.contents.prop = function (key) {
        var result = this;
        var keyArr = key.split(".");
        for (var index = 0; index < keyArr.length; index++) {
          var prop = keyArr[index];
          result = result[prop];
        }
        return result;
      };
      i18n.localize();
    })(this);
  };

  this.I18n.prototype.hasCachedContents = function () {
    return this.contents !== undefined;
  };

  this.I18n.prototype.lang = function (lang) {
    if (typeof lang === "string") {
      this.language = lang;
    }
    this.localize();
    return this.language;
  };

  this.I18n.prototype.localize = function () {
    var contents = this.contents;
    if (!this.hasCachedContents()) {
      return;
    }
    var dfs = function (node, keys, results) {
      var isLeaf = function (node) {
        for (var prop in node) {
          if (node.hasOwnProperty(prop)) {
            if (typeof node[prop] === "string") {
              return true;
            }
          }
        }
      };
      for (var prop in node) {
        if (node.hasOwnProperty(prop) && typeof node[prop] === "object") {
          var myKey = keys.slice();
          myKey.push(prop);
          if (isLeaf(node[prop])) {
            //results.push(myKey.reduce((prev, current) => prev + '.' + current));	//not supported in older mobile broweser
            results.push(
              myKey.reduce(function (
                previousValue,
                currentValue,
                currentIndex,
                array
              ) {
                return previousValue + "." + currentValue;
              })
            );
          } else {
            dfs(node[prop], myKey, results);
          }
        }
      }
      return results;
    };
    var keys = dfs(contents, [], []);
    for (var index = 0; index < keys.length; index++) {
      var key = keys[index];
      if (contents.prop(key).hasOwnProperty(this.language)) {
        $('[data-i18n="' + key + '"]').text(contents.prop(key)[this.language]);
        $('[data-i18n-placeholder="' + key + '"]').attr(
          "placeholder",
          contents.prop(key)[this.language]
        );
        $('[data-i18n-value="' + key + '"]').attr(
          "value",
          contents.prop(key)[this.language]
        );
      } else {
        $('[data-i18n="' + key + '"]').text(contents.prop(key)["en"]);
        $('[data-i18n-placeholder="' + key + '"]').attr(
          "placeholder",
          contents.prop(key)["en"]
        );
        $('[data-i18n-value="' + key + '"]').attr(
          "value",
          contents.prop(key)["en"]
        );
      }
    }
  };
}.apply(window));

$(document).ready(function () {
  var i18n = new I18n();
  i18n.localize();
  $("#french").addClass("selected");
  $("#english").hide();

  $("#french").on("click", function () {
    i18n.lang("fr");
    $("#french").hide();
    $("#english").show();
    selectLang($(this));
  });
  $("#english").on("click", function () {
    i18n.lang("en");
    $("#english").hide();
    $("#french").show();
    selectLang($(this));
  });

  function selectLang(picker) {
    $(".lang-picker li").removeClass("selected");
    picker.addClass("selected");
  }
});

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
                                sont : Elim FLORVIL
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

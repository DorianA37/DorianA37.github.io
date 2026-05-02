/* ═══════════════════════════════════════════════════
   E5 — Filtres par bloc/compétence + Modal visionneuse
   e5.js
   ═══════════════════════════════════════════════════ */
console.log("E5 LOADED");
/* ─── DATA : Compétences par projet ─── */
const PROJECTS = {

  /* ─────────────────────────────────────────────────
     MIVDL
     Tableau union visiteur+admin :
     GPI2,3,5 · INC1,3 · WEB1,3 · PRJ1,2,3 · SRV1,2,3 · DEV1,2
  ───────────────────────────────────────────────── */
  'mivdl-front': {
    label: 'Site Web MadeInValDeLoire',
    competences: {
      'GPI 2': {
        label: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/mivdl/gpi2-1.png', caption: 'Respect des normes PSR et conventions CodeIgniter4' },
        ]
      },
      'GPI 3': {
        label: 'Mettre en place et vérifier les niveaux d\'habilitation associés à un service',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/mivdl/gpi3-1.png', caption: 'Gestion des rôles (visiteur, producteur, admin)' },
        ]
      },
      'GPI 5': {
        label: 'Gérer des sauvegardes',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/mivdl/gpi5-1.png', caption: 'Sauvegarde de la base de données MySQL' },
        ]
      },
      'INC 1': {
        label: 'Collecter, suivre et orienter des demandes',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/mivdl/inc1-1.png', caption: 'Suivi des retours utilisateurs et corrections' },
        ]
      },
      'INC 3': {
        label: 'Traiter des demandes applicatives',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/mivdl/inc3-1.png', caption: 'Correction de bugs applicatifs signalés' },
        ]
      },
      'WEB 1': {
        label: 'Valoriser l\'image de l\'organisation sur les médias numériques',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/mivdl/web1-1.png', caption: 'Interface catalogue visiteur — HTML/CSS/JS' },
          { src: '/img/proofs/mivdl/web1-2.png', caption: 'Responsive mobile du catalogue' },
        ]
      },
      'WEB 3': {
        label: 'Participer à l\'évolution d\'un site Web',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/mivdl/web3-1.png', caption: 'Requêtes MySQL via CodeIgniter4' },
        ]
      },
      'PRJ 1': {
        label: 'Analyser les objectifs et les modalités d\'organisation d\'un projet',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/mivdl/prj1-1.png', caption: 'Cahier des charges initial' },
        ]
      },
      'PRJ 2': {
        label: 'Planifier les activités',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/mivdl/prj2-1.png', caption: 'Diagramme de Gantt du projet' },
        ]
      },
      'PRJ 3': {
        label: 'Évaluer les indicateurs de suivi d\'un projet et analyser les écarts',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/mivdl/prj3-1.png', caption: 'Compte-rendu de suivi et bilan de fin de projet' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/mivdl/srv1-1.png', caption: 'Tests fonctionnels visiteur et back-office' },
        ]
      },
      'SRV 2': {
        label: 'Déployer un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/mivdl/srv2-1.png', caption: 'Déploiement sur serveur de test' },
        ]
      },
      'SRV 3': {
        label: 'Accompagner les utilisateurs dans la mise en place d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/mivdl/srv3-1.png', caption: 'Guide utilisateur back-office producteurs' },
        ]
      },
      'DEV 1': {
        label: 'Mettre en place son environnement d\'apprentissage personnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/mivdl/dev1-1.png', caption: 'Configuration environnement de développement local' },
        ]
      },
      'DEV 2': {
        label: 'Mettre en œuvre des outils et stratégies de veille informationnelle',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/mivdl/dev2-1.png', caption: 'Documentation et veille sur CodeIgniter4' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     CYBER-ENTRAINEMENT
     Tableau : GPI2,3,5 · INC1,3 · PRJ1,2,3 · SRV1,3 · DEV1
  ───────────────────────────────────────────────── */
  'cyber': {
    label: 'Projet Cyber-entrainement',
    competences: {
      'GPI 2': {
        label: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/cyber/gpi2-1.png', caption: 'Respect des conventions .NET et documentation du code' },
        ]
      },
      'GPI 3': {
        label: 'Mettre en place et vérifier les niveaux d\'habilitation associés à un service',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/cyber/gpi3-1.png', caption: 'Schéma de la base SQLite et gestion des accès' },
        ]
      },
      'GPI 5': {
        label: 'Gérer des sauvegardes',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/cyber/gpi5-1.png', caption: 'Sauvegarde et versioning du projet' },
        ]
      },
      'INC 1': {
        label: 'Collecter, suivre et orienter des demandes',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/cyber/inc1-1.png', caption: 'Chiffrement et protection des données utilisateur' },
        ]
      },
      'INC 3': {
        label: 'Traiter des demandes applicatives',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/cyber/inc3-1.png', caption: 'Résolution de bugs et traitement des anomalies' },
        ]
      },
      'PRJ 1': {
        label: 'Analyser les objectifs et les modalités d\'organisation d\'un projet',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/cyber/prj1-1.png', caption: 'Spécifications fonctionnelles' },
        ]
      },
      'PRJ 2': {
        label: 'Planifier les activités',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/cyber/prj2-1.png', caption: 'Planification des sprints de développement' },
        ]
      },
      'PRJ 3': {
        label: 'Évaluer les indicateurs de suivi d\'un projet et analyser les écarts',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/cyber/prj3-1.png', caption: 'Bilan de fin de projet et écarts constatés' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/cyber/srv1-1.png', caption: 'Tests unitaires et tests d\'intégration WPF' },
        ]
      },
      'SRV 3': {
        label: 'Accompagner les utilisateurs dans la mise en place d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/cyber/srv3-1.png', caption: 'Changelog et évolutions de l\'application' },
        ]
      },
      'DEV 1': {
        label: 'Mettre en place son environnement d\'apprentissage personnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/cyber/dev1-1.png', caption: 'Documentation technique du projet' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     E-COMMERCE
     Tableau : GPI2,3,5 · INC1,3 · WEB3 · PRJ1,2,3 · SRV1 · DEV1,2
  ───────────────────────────────────────────────── */
  'ecommerce': {
    label: 'Site web e-commerce',
    competences: {
      'GPI 2': {
        label: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/ecommerce/gpi2-1.png', caption: 'Respect des conventions PHP et structure MVC' },
        ]
      },
      'GPI 3': {
        label: 'Mettre en place et vérifier les niveaux d\'habilitation associés à un service',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/ecommerce/gpi3-1.png', caption: 'Gestion des rôles utilisateur / admin' },
        ]
      },
      'GPI 5': {
        label: 'Gérer des sauvegardes',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/ecommerce/gpi5-1.png', caption: 'Sauvegarde de la base de données' },
        ]
      },
      'INC 1': {
        label: 'Collecter, suivre et orienter des demandes',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/ecommerce/inc1-1.png', caption: 'Suivi des retours et corrections post-livraison' },
        ]
      },
      'INC 3': {
        label: 'Traiter des demandes applicatives',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/ecommerce/inc3-1.png', caption: 'Correction de bugs panier et authentification' },
        ]
      },
      'WEB 3': {
        label: 'Participer à l\'évolution d\'un site Web',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/ecommerce/web3-1.png', caption: 'Requêtes PHP/MySQL panier et catalogue' },
        ]
      },
      'PRJ 1': {
        label: 'Analyser les objectifs et les modalités d\'organisation d\'un projet',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/ecommerce/prj1-1.png', caption: 'Analyse des besoins et cahier des charges' },
        ]
      },
      'PRJ 2': {
        label: 'Planifier les activités',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/ecommerce/prj2-1.png', caption: 'Planning de développement' },
        ]
      },
      'PRJ 3': {
        label: 'Évaluer les indicateurs de suivi d\'un projet et analyser les écarts',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/ecommerce/prj3-1.png', caption: 'Bilan de fin de projet' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/ecommerce/srv1-1.png', caption: 'Tests fonctionnels — authentification et sessions' },
        ]
      },
      'DEV 1': {
        label: 'Mettre en place son environnement d\'apprentissage personnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/ecommerce/dev1-1.png', caption: 'Configuration PhpStorm et environnement local' },
        ]
      },
      'DEV 2': {
        label: 'Mettre en œuvre des outils et stratégies de veille informationnelle',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/ecommerce/dev2-1.png', caption: 'Veille sur les pratiques PHP et sécurité web' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     CITERADIO APP
     Tableau : GPI1,2,3,4,5 · INC1,3 · WEB1,2 · PRJ1,2 · SRV1,3 · DEV1,2
  ───────────────────────────────────────────────── */
  'citeradio-app': {
    label: 'Application CITERADIO',
    competences: {
      'GPI 1': {
        label: 'Recenser et identifier les ressources numériques',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/citeradio/gpi1-1.png', caption: 'Inventaire des ressources et contraintes techniques radio' },
        ]
      },
      'GPI 2': {
        label: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/citeradio/gpi2-1.png', caption: 'Conventions de code et documentation' },
        ]
      },
      'GPI 3': {
        label: 'Mettre en place et vérifier les niveaux d\'habilitation associés à un service',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/citeradio/gpi3-1.png', caption: 'Gestion des droits visiteur / admin' },
        ]
      },
      'GPI 4': {
        label: 'Vérifier les conditions de la continuité d\'un service informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/citeradio/gpi4-1.png', caption: 'Tests de disponibilité du service en production' },
        ]
      },
      'GPI 5': {
        label: 'Gérer des sauvegardes',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/citeradio/gpi5-1.png', caption: 'Sauvegarde des données du jeu concours' },
        ]
      },
      'INC 1': {
        label: 'Collecter, suivre et orienter des demandes',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/citeradio/inc1-1.png', caption: 'Suivi des demandes client radio pendant le stage' },
        ]
      },
      'INC 3': {
        label: 'Traiter des demandes applicatives',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/citeradio/inc3-1.png', caption: 'Corrections applicatives suite aux retours client' },
        ]
      },
      'WEB 1': {
        label: 'Valoriser l\'image de l\'organisation sur les médias numériques',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/citeradio/web1-1.png', caption: 'Interface jeu concours aux couleurs de la radio' },
        ]
      },
      'WEB 2': {
        label: 'Référencer les services en ligne de l\'organisation et mesurer leur visibilité',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/citeradio/web2-1.png', caption: 'Mise en ligne et référencement du jeu concours' },
        ]
      },
      'PRJ 1': {
        label: 'Analyser les objectifs et les modalités d\'organisation d\'un projet',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/citeradio/prj1-1.png', caption: 'Brief client et cahier des charges' },
        ]
      },
      'PRJ 2': {
        label: 'Planifier les activités',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/citeradio/prj2-1.png', caption: 'Planning des livrables du stage' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/citeradio/srv1-1.png', caption: 'Tests de l\'application mobile et du jeu concours' },
        ]
      },
      'SRV 3': {
        label: 'Accompagner les utilisateurs dans la mise en place d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/citeradio/srv3-1.png', caption: 'Déploiement en milieu professionnel et formation équipe' },
        ]
      },
      'DEV 1': {
        label: 'Mettre en place son environnement d\'apprentissage personnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/citeradio/dev1-1.png', caption: 'Prise en main MIT App Inventor en autonomie' },
        ]
      },
      'DEV 2': {
        label: 'Mettre en œuvre des outils et stratégies de veille informationnelle',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/citeradio/dev2-1.png', caption: 'Veille sur MIT App Inventor et PHP' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     CHEIKHNICO.ORG
     Tableau : GPI2,3,5 · INC1,3 · WEB1,2,3 · PRJ1,2,3 · SRV1,2,3 · DEV1,2,3,4
  ───────────────────────────────────────────────── */
  'cheikhnico': {
    label: 'Site cheikhnico.org',
    competences: {
      'GPI 2': {
        label: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/cheikhnico/gpi2-1.png', caption: 'Respect des standards WordPress et conventions PHP' },
        ]
      },
      'GPI 3': {
        label: 'Mettre en place et vérifier les niveaux d\'habilitation associés à un service',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/cheikhnico/gpi3-1.png', caption: 'Gestion des rôles WordPress (éditeur, admin)' },
        ]
      },
      'GPI 5': {
        label: 'Gérer des sauvegardes',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/cheikhnico/gpi5-1.png', caption: 'Sauvegardes du site avant déploiement' },
        ]
      },
      'INC 1': {
        label: 'Collecter, suivre et orienter des demandes',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/cheikhnico/inc1-1.png', caption: 'Suivi des retours client et itérations' },
        ]
      },
      'INC 3': {
        label: 'Traiter des demandes applicatives',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/cheikhnico/inc3-1.png', caption: 'Corrections applicatives et optimisations' },
        ]
      },
      'WEB 1': {
        label: 'Valoriser l\'image de l\'organisation sur les médias numériques',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/cheikhnico/web1-1.png', caption: 'Page d\'accueil thème sur-mesure' },
          { src: '/img/proofs/cheikhnico/web1-2.png', caption: 'Vue mobile' },
        ]
      },
      'WEB 2': {
        label: 'Référencer les services en ligne de l\'organisation et mesurer leur visibilité',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/cheikhnico/web2-1.png', caption: 'Optimisation SEO — balises, sitemap, performances' },
          { src: '/img/proofs/cheikhnico/web2-2.png', caption: 'Score Lighthouse et mesure de visibilité' },
        ]
      },
      'WEB 3': {
        label: 'Participer à l\'évolution d\'un site Web',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/cheikhnico/web3-1.png', caption: 'WP_Query, custom post types et templates PHP' },
        ]
      },
      'PRJ 1': {
        label: 'Analyser les objectifs et les modalités d\'organisation d\'un projet',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/cheikhnico/prj1-1.png', caption: 'Maquette Figma validée avec le client' },
        ]
      },
      'PRJ 2': {
        label: 'Planifier les activités',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/cheikhnico/prj2-1.png', caption: 'Planning du stage et jalons de livraison' },
        ]
      },
      'PRJ 3': {
        label: 'Évaluer les indicateurs de suivi d\'un projet et analyser les écarts',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/cheikhnico/prj3-1.png', caption: 'Bilan de livraison et retour client' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/cheikhnico/srv1-1.png', caption: 'Tests cross-navigateur et recette client' },
        ]
      },
      'SRV 2': {
        label: 'Déployer un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/cheikhnico/srv2-1.png', caption: 'Déploiement FTP et mise en production' },
        ]
      },
      'SRV 3': {
        label: 'Accompagner les utilisateurs dans la mise en place d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/cheikhnico/srv3-1.png', caption: 'Formation client à l\'administration WordPress' },
        ]
      },
      'DEV 1': {
        label: 'Mettre en place son environnement d\'apprentissage personnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/cheikhnico/dev1-1.png', caption: 'Configuration environnement WordPress local (LocalWP)' },
        ]
      },
      'DEV 2': {
        label: 'Mettre en œuvre des outils et stratégies de veille informationnelle',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/cheikhnico/dev2-1.png', caption: 'Veille WordPress, SCSS et bonnes pratiques SEO' },
        ]
      },
      'DEV 3': {
        label: 'Gérer son identité professionnelle',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/cheikhnico/dev3-1.png', caption: 'Git — historique des commits et travail en équipe' },
        ]
      },
      'DEV 4': {
        label: 'Développer son projet professionnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/cheikhnico/dev4-1.png', caption: 'Bilan de stage et compétences acquises' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     LANDING PAGE DOMINIQUE
     Tableau : GPI2 · PRJ2,3
  ───────────────────────────────────────────────── */
  'dominique': {
    label: 'Landing page Dominique Chauvelier',
    competences: {
      'GPI 2': {
        label: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/dominique/gpi2-1.png', caption: 'Respect des normes HTML5/CSS3 et bonnes pratiques' },
        ]
      },
      'PRJ 2': {
        label: 'Planifier les activités',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/dominique/prj2-1.png', caption: 'Planning de livraison de la landing page' },
        ]
      },
      'PRJ 3': {
        label: 'Évaluer les indicateurs de suivi d\'un projet et analyser les écarts',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/dominique/prj3-1.png', caption: 'Bilan de livraison et retour client' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     VEILLE INFORMATIONNELLE
     Tableau : DEV1,2,3
  ───────────────────────────────────────────────── */
  'veille': {
    label: 'Veille informationnelle',
    competences: {
      'DEV 1': {
        label: 'Mettre en place son environnement d\'apprentissage personnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/veille/dev1-1.png', caption: 'Mise en place des flux de veille (LinkedIn, Discover, YouTube)' },
        ]
      },
      'DEV 2': {
        label: 'Mettre en œuvre des outils et stratégies de veille informationnelle',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/veille/dev2-1.png', caption: 'Captures d\'articles et ressources suivis' },
        ]
      },
      'DEV 3': {
        label: 'Gérer son identité professionnelle',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/veille/dev3-1.png', caption: 'Profil LinkedIn et partages professionnels' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     OPENCLASSROOM
     Tableau : DEV1
  ───────────────────────────────────────────────── */
  'openclassroom': {
    label: 'Auto-formation Openclassroom',
    competences: {
      'DEV 1': {
        label: 'Mettre en place son environnement d\'apprentissage personnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/openclassroom/dev1-1.png', caption: 'Parcours suivis sur OpenClassroom' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     TP GLPI
     Tableau : GPI1,4 · INC1,2 · SRV1,2 · DEV1
  ───────────────────────────────────────────────── */
  'glpi': {
    label: 'TP GLPI',
    competences: {
      'GPI 1': {
        label: 'Recenser et identifier les ressources numériques',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/glpi/gpi1-1.png', caption: 'Inventaire du parc informatique dans GLPI' },
        ]
      },
      'GPI 4': {
        label: 'Vérifier les conditions de la continuité d\'un service informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/glpi/gpi4-1.png', caption: 'Suivi de la disponibilité des services via GLPI' },
        ]
      },
      'INC 1': {
        label: 'Collecter, suivre et orienter des demandes',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/glpi/inc1-1.png', caption: 'Gestion des tickets d\'incidents dans GLPI' },
        ]
      },
      'INC 2': {
        label: 'Traiter des demandes réseau et système',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/glpi/inc2-1.png', caption: 'Traitement des demandes réseau via GLPI' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/glpi/srv1-1.png', caption: 'Tests de configuration GLPI' },
        ]
      },
      'SRV 2': {
        label: 'Déployer un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/glpi/srv2-1.png', caption: 'Déploiement et paramétrage de GLPI' },
        ]
      },
      'DEV 1': {
        label: 'Mettre en place son environnement d\'apprentissage personnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/glpi/dev1-1.png', caption: 'Prise en main de GLPI en autonomie' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     TP ACTIVE DIRECTORY
     Tableau : GPI1,3 · INC1,2 · SRV1,2 · DEV1
  ───────────────────────────────────────────────── */
  'ad': {
    label: 'TP Active Directory',
    competences: {
      'GPI 1': {
        label: 'Recenser et identifier les ressources numériques',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/ad/gpi1-1.png', caption: 'Recensement des utilisateurs et groupes AD' },
        ]
      },
      'GPI 3': {
        label: 'Mettre en place et vérifier les niveaux d\'habilitation associés à un service',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/ad/gpi3-1.png', caption: 'Configuration des GPO et niveaux d\'habilitation' },
        ]
      },
      'INC 1': {
        label: 'Collecter, suivre et orienter des demandes',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/ad/inc1-1.png', caption: 'Suivi des demandes d\'accès utilisateur' },
        ]
      },
      'INC 2': {
        label: 'Traiter des demandes réseau et système',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/ad/inc2-1.png', caption: 'Résolution de problèmes de jonction au domaine' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/ad/srv1-1.png', caption: 'Tests de connexion et application des GPO' },
        ]
      },
      'SRV 2': {
        label: 'Déployer un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/ad/srv2-1.png', caption: 'Déploiement du contrôleur de domaine Windows Server' },
        ]
      },
      'DEV 1': {
        label: 'Mettre en place son environnement d\'apprentissage personnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/ad/dev1-1.png', caption: 'Configuration de la VM Windows Server' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     TP DOS
     Tableau : GPI1,4 · INC2 · SRV1,2 · DEV1
  ───────────────────────────────────────────────── */
  'dos': {
    label: 'TP DOS',
    competences: {
      'GPI 1': {
        label: 'Recenser et identifier les ressources numériques',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/dos/gpi1-1.png', caption: 'Inventaire des fichiers et répertoires en ligne de commande' },
        ]
      },
      'GPI 4': {
        label: 'Vérifier les conditions de la continuité d\'un service informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/dos/gpi4-1.png', caption: 'Scripts batch de vérification de continuité de service' },
        ]
      },
      'INC 2': {
        label: 'Traiter des demandes réseau et système',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/dos/inc2-1.png', caption: 'Commandes réseau DOS (ping, ipconfig, netstat)' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/dos/srv1-1.png', caption: 'Tests des scripts batch' },
        ]
      },
      'SRV 2': {
        label: 'Déployer un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/dos/srv2-1.png', caption: 'Déploiement de scripts d\'automatisation' },
        ]
      },
      'DEV 1': {
        label: 'Mettre en place son environnement d\'apprentissage personnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/dos/dev1-1.png', caption: 'Prise en main de l\'environnement CMD/DOS' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     TP CLUSTER MYSQL
     Tableau : GPI1,4,5 · INC2 · SRV1,2 · DEV1
  ───────────────────────────────────────────────── */
  'cluster-mysql': {
    label: 'TP Cluster MySQL',
    competences: {
      'GPI 1': {
        label: 'Recenser et identifier les ressources numériques',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/cluster/gpi1-1.png', caption: 'Inventaire des nœuds du cluster' },
        ]
      },
      'GPI 4': {
        label: 'Vérifier les conditions de la continuité d\'un service informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/cluster/gpi4-1.png', caption: 'Test de basculement et continuité du service MySQL' },
        ]
      },
      'GPI 5': {
        label: 'Gérer des sauvegardes',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/cluster/gpi5-1.png', caption: 'Configuration des sauvegardes automatiques' },
        ]
      },
      'INC 2': {
        label: 'Traiter des demandes réseau et système',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/cluster/inc2-1.png', caption: 'Configuration réseau des nœuds MySQL' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/cluster/srv1-1.png', caption: 'Tests de réplication et de haute disponibilité' },
        ]
      },
      'SRV 2': {
        label: 'Déployer un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/cluster/srv2-1.png', caption: 'Déploiement du cluster MySQL maître/esclave' },
        ]
      },
      'DEV 1': {
        label: 'Mettre en place son environnement d\'apprentissage personnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/cluster/dev1-1.png', caption: 'Configuration des VMs pour le cluster' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     TP MAUI
     Tableau : GPI2,5 · INC2,3 · SRV1
  ───────────────────────────────────────────────── */
  'maui': {
    label: 'TP MAUI',
    competences: {
      'GPI 2': {
        label: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/maui/gpi2-1.png', caption: 'Respect des conventions .NET MAUI et MVVM' },
        ]
      },
      'GPI 5': {
        label: 'Gérer des sauvegardes',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/maui/gpi5-1.png', caption: 'Gestion des données locales de l\'application' },
        ]
      },
      'INC 2': {
        label: 'Traiter des demandes réseau et système',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/maui/inc2-1.png', caption: 'Déploiement sur simulateur Android et Windows' },
        ]
      },
      'INC 3': {
        label: 'Traiter des demandes applicatives',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/maui/inc3-1.png', caption: 'Débogage et correction des anomalies MAUI' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/maui/srv1-1.png', caption: 'Tests de l\'application sur simulateur' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     TP TESTS UNITAIRES
     Tableau : INC3 · SRV1
  ───────────────────────────────────────────────── */
  'tests-unitaires': {
    label: 'TP Tests Unitaires',
    competences: {
      'INC 3': {
        label: 'Traiter des demandes applicatives',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/phpunit/inc3-1.png', caption: 'Cas de test et assertions PHPUnit' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/phpunit/srv1-1.png', caption: 'Rapport de couverture de code PHPUnit' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     TP TRIGGERS, FONCTIONS, PROCÉDURES
     Tableau : GPI2,3,5 · INC3 · SRV1
  ───────────────────────────────────────────────── */
  'triggers': {
    label: 'TP Triggers, Fonctions & Procédures',
    competences: {
      'GPI 2': {
        label: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/triggers/gpi2-1.png', caption: 'Respect des conventions SQL et documentation' },
        ]
      },
      'GPI 3': {
        label: 'Mettre en place et vérifier les niveaux d\'habilitation associés à un service',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/triggers/gpi3-1.png', caption: 'Gestion des droits d\'accès base de données' },
        ]
      },
      'GPI 5': {
        label: 'Gérer des sauvegardes',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/triggers/gpi5-1.png', caption: 'Sauvegarde avant modification des procédures' },
        ]
      },
      'INC 3': {
        label: 'Traiter des demandes applicatives',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/triggers/inc3-1.png', caption: 'Triggers de contrôle d\'intégrité et gestion d\'erreurs' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/triggers/srv1-1.png', caption: 'Tests des procédures stockées et triggers' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     FORMATION PHPCS
     Tableau : GPI1,2 · SRV1,3 · DEV1
  ───────────────────────────────────────────────── */
  'phpcs': {
    label: 'Formation utilisateur PHPCS',
    competences: {
      'GPI 1': {
        label: 'Recenser et identifier les ressources numériques',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/phpcs/gpi1-1.png', caption: 'Analyse du parc de fichiers PHP à normaliser' },
        ]
      },
      'GPI 2': {
        label: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/phpcs/gpi2-1.png', caption: 'Configuration PHPCS avec les normes PSR-1, PSR-2, PSR-12' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/phpcs/srv1-1.png', caption: 'Tests de conformité du code analysé' },
        ]
      },
      'SRV 3': {
        label: 'Accompagner les utilisateurs dans la mise en place d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/phpcs/srv3-1.png', caption: 'Guide de prise en main PHPCS pour les utilisateurs' },
        ]
      },
      'DEV 1': {
        label: 'Mettre en place son environnement d\'apprentissage personnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/phpcs/dev1-1.png', caption: 'Intégration de PHPCS dans le workflow de développement' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     CITERADIO JEUX — VISITEUR
     Tableau : GPI2,3,5 · INC1 · WEB1,3 · PRJ1,2 · SRV1,2,3 · DEV1,2
  ───────────────────────────────────────────────── */
  'citeradio-jeux-visiteur': {
    label: 'Jeux concours CITERADIO — Visiteur',
    competences: {
      'GPI 2': {
        label: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/citeradio-visiteur/gpi2-1.png', caption: 'Conventions de code PHP respectées' },
        ]
      },
      'GPI 3': {
        label: 'Mettre en place et vérifier les niveaux d\'habilitation associés à un service',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/citeradio-visiteur/gpi3-1.png', caption: 'Restriction d\'accès visiteur (pas d\'interface admin)' },
        ]
      },
      'GPI 5': {
        label: 'Gérer des sauvegardes',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/citeradio-visiteur/gpi5-1.png', caption: 'Sauvegarde des participations en base' },
        ]
      },
      'INC 1': {
        label: 'Collecter, suivre et orienter des demandes',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/citeradio-visiteur/inc1-1.png', caption: 'Suivi des participations et retours utilisateurs' },
        ]
      },
      'WEB 1': {
        label: 'Valoriser l\'image de l\'organisation sur les médias numériques',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/citeradio-visiteur/web1-1.png', caption: 'Interface visiteur aux couleurs de CITERADIO' },
        ]
      },
      'WEB 3': {
        label: 'Participer à l\'évolution d\'un site Web',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/citeradio-visiteur/web3-1.png', caption: 'Formulaire de participation et validation PHP' },
        ]
      },
      'PRJ 1': {
        label: 'Analyser les objectifs et les modalités d\'organisation d\'un projet',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/citeradio-visiteur/prj1-1.png', caption: 'Cahier des charges et spécifications visiteur' },
        ]
      },
      'PRJ 2': {
        label: 'Planifier les activités',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/citeradio-visiteur/prj2-1.png', caption: 'Planning de développement du module visiteur' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/citeradio-visiteur/srv1-1.png', caption: 'Tests du formulaire de participation' },
        ]
      },
      'SRV 2': {
        label: 'Déployer un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/citeradio-visiteur/srv2-1.png', caption: 'Déploiement en milieu professionnel' },
        ]
      },
      'SRV 3': {
        label: 'Accompagner les utilisateurs dans la mise en place d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/citeradio-visiteur/srv3-1.png', caption: 'Présentation du jeu concours à l\'équipe radio' },
        ]
      },
      'DEV 1': {
        label: 'Mettre en place son environnement d\'apprentissage personnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/citeradio-visiteur/dev1-1.png', caption: 'Configuration de l\'environnement de développement PHP' },
        ]
      },
      'DEV 2': {
        label: 'Mettre en œuvre des outils et stratégies de veille informationnelle',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/citeradio-visiteur/dev2-1.png', caption: 'Veille sur PHP et bonnes pratiques formulaires' },
        ]
      },
    }
  },

  /* ─────────────────────────────────────────────────
     CITERADIO JEUX — ADMIN
     Tableau : GPI2,3,5 · INC1 · WEB1,3 · PRJ1,2 · SRV1,2,3 · DEV1,2
  ───────────────────────────────────────────────── */
  'citeradio-jeux-admin': {
    label: 'Jeux concours CITERADIO — Admin',
    competences: {
      'GPI 2': {
        label: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/citeradio-admin/gpi2-1.png', caption: 'Conventions de code PHP — interface admin' },
        ]
      },
      'GPI 3': {
        label: 'Mettre en place et vérifier les niveaux d\'habilitation associés à un service',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/citeradio-admin/gpi3-1.png', caption: 'Authentification et accès restreint à l\'interface admin' },
        ]
      },
      'GPI 5': {
        label: 'Gérer des sauvegardes',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/citeradio-admin/gpi5-1.png', caption: 'Export des participants et sauvegarde des données' },
        ]
      },
      'INC 1': {
        label: 'Collecter, suivre et orienter des demandes',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/citeradio-admin/inc1-1.png', caption: 'Tableau de bord admin — consultation des participations' },
        ]
      },
      'WEB 1': {
        label: 'Valoriser l\'image de l\'organisation sur les médias numériques',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/citeradio-admin/web1-1.png', caption: 'Interface admin aux couleurs de CITERADIO' },
        ]
      },
      'WEB 3': {
        label: 'Participer à l\'évolution d\'un site Web',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/citeradio-admin/web3-1.png', caption: 'Requêtes PHP/MySQL — gestion des participants' },
        ]
      },
      'PRJ 1': {
        label: 'Analyser les objectifs et les modalités d\'organisation d\'un projet',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/citeradio-admin/prj1-1.png', caption: 'Cahier des charges — besoins admin radio' },
        ]
      },
      'PRJ 2': {
        label: 'Planifier les activités',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/citeradio-admin/prj2-1.png', caption: 'Planning de développement du module admin' },
        ]
      },
      'SRV 1': {
        label: 'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/citeradio-admin/srv1-1.png', caption: 'Tests de l\'interface admin avec l\'équipe CITERADIO' },
        ]
      },
      'SRV 2': {
        label: 'Déployer un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/citeradio-admin/srv2-1.png', caption: 'Déploiement en production sur le serveur radio' },
        ]
      },
      'SRV 3': {
        label: 'Accompagner les utilisateurs dans la mise en place d\'un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/citeradio-admin/srv3-1.png', caption: 'Formation de l\'équipe radio à l\'interface admin' },
        ]
      },
      'DEV 1': {
        label: 'Mettre en place son environnement d\'apprentissage personnel',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/citeradio-admin/dev1-1.png', caption: 'Configuration de l\'environnement de développement' },
        ]
      },
      'DEV 2': {
        label: 'Mettre en œuvre des outils et stratégies de veille informationnelle',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/citeradio-admin/dev2-1.png', caption: 'Veille sur la sécurisation des interfaces d\'administration' },
        ]
      },
    }
  },

};

/* ─── CONFIG blocs ─── */
const BLOCS = {
  GPI: { label: 'Gérer le patrimoine informatique', color: 'var(--green)',  colorRaw: 'rgba(0,255,135,0.18)' },
  INC: { label: 'Répondre aux incidents',           color: '#ff6b7a',      colorRaw: 'rgba(255,71,87,0.18)' },
  WEB: { label: 'Développement web',                color: 'var(--cyan)',   colorRaw: 'rgba(0,212,255,0.18)' },
  PRJ: { label: 'Travailler en mode projet',        color: '#c084fc',      colorRaw: 'rgba(168,85,247,0.18)' },
  SRV: { label: 'Mettre en place un service',       color: '#facc15',      colorRaw: 'rgba(250,204,21,0.18)' },
  DEV: { label: 'Organiser son développement',      color: 'var(--green)',  colorRaw: 'rgba(0,255,135,0.18)' },
};

/* ─── STATE ─── */
let activeBloc = null;
let activeComp = null;
let modalProjectId = null;
let viewerIndex = 0;

/* ═══════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildFilters();
  buildModal();
  bindCards();
});

/* ═══════════════════════════════════════════════════
   FILTRES
   ═══════════════════════════════════════════════════ */
function buildFilters() {
  const container = document.querySelector('.e5-filters');
  if (!container) return;

  container.innerHTML = '';

  /* Bouton "Tous" */
  const allBtn = makeFilterBtn('Tous', 'all', true);
  allBtn.addEventListener('click', () => setFilter(null, null, allBtn));
  container.appendChild(allBtn);

  /* Séparateur visuel */
  container.appendChild(makeSep());

  /* Un bouton par bloc */
  Object.entries(BLOCS).forEach(([bloc, cfg]) => {
    const btn = makeFilterBtn(bloc, bloc);
    btn.style.setProperty('--bloc-color', cfg.color);
    btn.addEventListener('click', () => setFilter(bloc, null, btn));
    container.appendChild(btn);
  });

  /* Sous-filtres compétences (injectés dynamiquement) */
  const subRow = document.createElement('div');
  subRow.className = 'e5-subfilters';
  subRow.id = 'e5-subfilters';
  container.after(subRow);
}

function makeFilterBtn(text, value, active = false) {
  const btn = document.createElement('button');
  btn.className = 'e5-filter' + (active ? ' active' : '');
  btn.dataset.value = value;
  btn.textContent = text;
  return btn;
}

function makeSep() {
  const sep = document.createElement('span');
  sep.className = 'e5-filter-sep';
  return sep;
}

function setFilter(bloc, comp, clickedBtn) {
  activeBloc = bloc;
  activeComp = comp;

  /* Mise à jour visuels boutons principaux */
  document.querySelectorAll('.e5-filters .e5-filter').forEach(b => b.classList.remove('active'));
  if (clickedBtn) clickedBtn.classList.add('active');

  /* Sous-filtres */
  buildSubFilters(bloc);

  /* Filtrer les cards */
  filterCards();
}

function buildSubFilters(bloc) {
  const subRow = document.getElementById('e5-subfilters');
  subRow.innerHTML = '';

  if (!bloc) return;

  /* Collecter toutes les compétences du bloc parmi les projets */
  const comps = new Set();
  Object.values(PROJECTS).forEach(proj => {
    Object.keys(proj.competences).forEach(compKey => {
      if (proj.competences[compKey].bloc === bloc) comps.add(compKey);
    });
  });

  if (comps.size === 0) return;

  /* Bouton "Tout le bloc" */
  const allComp = makeFilterBtn('Tout ' + bloc, bloc + '-all', true);
  allComp.classList.add('e5-subfilter');
  allComp.addEventListener('click', () => {
    document.querySelectorAll('.e5-subfilter').forEach(b => b.classList.remove('active'));
    allComp.classList.add('active');
    activeComp = null;
    filterCards();
  });
  subRow.appendChild(allComp);

  /* Un bouton par compétence */
  [...comps].sort().forEach(compKey => {
    const btn = makeFilterBtn(compKey, compKey);
    btn.classList.add('e5-subfilter');
    btn.dataset.bloc = bloc;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.e5-subfilter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeComp = compKey;
      filterCards();
    });
    subRow.appendChild(btn);
  });
}

function filterCards() {
  const cards = document.querySelectorAll('#e5-grid .e5-card');

  cards.forEach(card => {
    const projectId = card.dataset.project;
    const proj = PROJECTS[projectId];

    if (!proj) { card.style.display = ''; return; }

    let visible = true;

    if (activeComp) {
      /* Filtre compétence précise */
      visible = Object.keys(proj.competences).includes(activeComp);
    } else if (activeBloc) {
      /* Filtre bloc */
      visible = Object.values(proj.competences).some(c => c.bloc === activeBloc);
    }

    card.style.display = visible ? '' : 'none';
    if (visible) card.classList.add('e5-card--filtered');
    else card.classList.remove('e5-card--filtered');
  });
}

/* ═══════════════════════════════════════════════════
   BIND CARDS → ouvre la modal
   ═══════════════════════════════════════════════════ */
function bindCards() {
  console.log("BIND CARDS");
  document.querySelectorAll('#e5-grid .e5-card').forEach(card => {
    /* Click sur la card (hors liens) */
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      const projectId = card.dataset.project;
      if (projectId && PROJECTS[projectId]) openModal(projectId);
    });
    card.style.cursor = 'pointer';
  });
}

/* ═══════════════════════════════════════════════════
   MODAL
   ═══════════════════════════════════════════════════ */
function buildModal() {
  if (document.getElementById('e5-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'e5-modal';
  modal.innerHTML = `
    <div class="e5-modal-backdrop" id="e5-modal-backdrop"></div>
    <div class="e5-modal-panel" id="e5-modal-panel" role="dialog" aria-modal="true">
      <button class="e5-modal-close" id="e5-modal-close" aria-label="Fermer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <!-- En-tête projet -->
      <div class="e5-modal-header">
        <div class="e5-modal-emoji" id="e5-modal-emoji"></div>
        <div>
          <div class="e5-modal-kicker" id="e5-modal-kicker">Réalisation</div>
          <div class="e5-modal-title" id="e5-modal-title"></div>
        </div>
      </div>

      <!-- Sélecteur de compétences -->
      <div class="e5-modal-section-label">Choisir une compétence</div>
      <div class="e5-modal-comps" id="e5-modal-comps"></div>

      <!-- Visionneuse -->
      <div class="e5-viewer" id="e5-viewer" style="display:none">
        <div class="e5-viewer-header">
          <div class="e5-viewer-comp-label" id="e5-viewer-comp-label"></div>
          <div class="e5-viewer-comp-desc" id="e5-viewer-comp-desc"></div>
        </div>

        <div class="e5-viewer-stage">
          <button class="e5-viewer-nav e5-viewer-prev" id="e5-viewer-prev" aria-label="Précédent">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div class="e5-viewer-img-wrap">
            <div class="e5-viewer-placeholder" id="e5-viewer-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="40" height="40">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>Capture d'écran à ajouter</span>
              <code id="e5-viewer-path"></code>
            </div>
            <img id="e5-viewer-img" class="e5-viewer-img" src="" alt="" style="display:none"
                 onload="this.style.display='block'; document.getElementById('e5-viewer-placeholder').style.display='none';"
                 onerror="this.style.display='none'; document.getElementById('e5-viewer-placeholder').style.display='flex';" />
          </div>

          <button class="e5-viewer-nav e5-viewer-next" id="e5-viewer-next" aria-label="Suivant">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        <div class="e5-viewer-caption" id="e5-viewer-caption"></div>
        <div class="e5-viewer-counter" id="e5-viewer-counter"></div>
      </div>

    </div>
  `;

  document.body.appendChild(modal);

  /* Events */
  document.getElementById('e5-modal-close').addEventListener('click', closeModal);
  document.getElementById('e5-modal-backdrop').addEventListener('click', closeModal);
  document.getElementById('e5-viewer-prev').addEventListener('click', () => navigateViewer(-1));
  document.getElementById('e5-viewer-next').addEventListener('click', () => navigateViewer(1));

  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('e5-modal').classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigateViewer(-1);
    if (e.key === 'ArrowRight') navigateViewer(1);
  });
}

function openModal(projectId) {
  modalProjectId = projectId;
  viewerIndex = 0;

  const proj = PROJECTS[projectId];
  const card = document.querySelector(`[data-project="${projectId}"]`);

  /* Emoji depuis la card */
  const emoji = card ? (card.querySelector('.e5-card-emoji')?.textContent || '📁') : '📁';
  document.getElementById('e5-modal-emoji').textContent = emoji;
  document.getElementById('e5-modal-title').textContent = proj.label;

  /* Badge */
  const badge = card?.querySelector('.e5-card-badge');
  document.getElementById('e5-modal-kicker').textContent = badge ? badge.textContent.trim() : 'Réalisation';

  /* Reset viewer */
  document.getElementById('e5-viewer').style.display = 'none';

  /* Construire les boutons de compétences groupés par bloc */
  buildCompButtons(proj);

  /* Ouvrir */
  const modal = document.getElementById('e5-modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function buildCompButtons(proj) {
  const container = document.getElementById('e5-modal-comps');
  container.innerHTML = '';

  /* Grouper par bloc */
  const grouped = {};
  Object.entries(proj.competences).forEach(([key, comp]) => {
    if (!grouped[comp.bloc]) grouped[comp.bloc] = [];
    grouped[comp.bloc].push({ key, ...comp });
  });

  Object.entries(grouped).forEach(([bloc, comps]) => {
    const blocCfg = BLOCS[bloc] || { label: bloc, color: 'var(--green)' };

    const group = document.createElement('div');
    group.className = 'e5-comp-group';

    const groupLabel = document.createElement('div');
    groupLabel.className = 'e5-comp-group-label';
    groupLabel.textContent = bloc + ' — ' + blocCfg.label;
    groupLabel.style.color = blocCfg.color;
    group.appendChild(groupLabel);

    const btnRow = document.createElement('div');
    btnRow.className = 'e5-comp-btns';

    comps.forEach(comp => {
      const btn = document.createElement('button');
      btn.className = 'e5-comp-btn';
      btn.dataset.comp = comp.key;
      btn.style.setProperty('--comp-color', blocCfg.color);

      btn.innerHTML = `
        <span class="e5-comp-btn-key">${comp.key}</span>
        <span class="e5-comp-btn-label">${comp.label}</span>
        <span class="e5-comp-btn-count">${comp.preuves.length} capture${comp.preuves.length > 1 ? 's' : ''}</span>
      `;

      btn.addEventListener('click', () => {
        document.querySelectorAll('.e5-comp-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadViewer(comp.key);
      });

      btnRow.appendChild(btn);
    });

    group.appendChild(btnRow);
    container.appendChild(group);
  });
}

function loadViewer(compKey) {
  const proj = PROJECTS[modalProjectId];
  const comp = proj.competences[compKey];
  if (!comp) return;

  viewerIndex = 0;

  const bloc = comp.bloc;
  const blocCfg = BLOCS[bloc] || { color: 'var(--green)' };

  document.getElementById('e5-viewer-comp-label').textContent = compKey;
  document.getElementById('e5-viewer-comp-label').style.color = blocCfg.color;
  document.getElementById('e5-viewer-comp-desc').textContent = comp.label;

  document.getElementById('e5-viewer').style.display = 'block';

  renderCapture(comp);
}

function renderCapture(comp) {
  const preuve = comp.preuves[viewerIndex];
  if (!preuve) return;

  const img = document.getElementById('e5-viewer-img');
  const placeholder = document.getElementById('e5-viewer-placeholder');
  const path = document.getElementById('e5-viewer-path');

  /* Reset */
  img.style.display = 'none';
  placeholder.style.display = 'flex';
  path.textContent = preuve.src;

  img.alt = preuve.caption;
  img.src = preuve.src;

  document.getElementById('e5-viewer-caption').textContent = preuve.caption;
  document.getElementById('e5-viewer-counter').textContent =
    (viewerIndex + 1) + ' / ' + comp.preuves.length;

  /* Afficher/masquer nav */
  document.getElementById('e5-viewer-prev').style.opacity = viewerIndex === 0 ? '0.3' : '1';
  document.getElementById('e5-viewer-next').style.opacity = viewerIndex === comp.preuves.length - 1 ? '0.3' : '1';
}

function navigateViewer(dir) {
  const comp = getActiveComp();
  if (!comp) return;
  viewerIndex = Math.max(0, Math.min(comp.preuves.length - 1, viewerIndex + dir));
  renderCapture(comp);
}

function getActiveComp() {
  const activeBtn = document.querySelector('.e5-comp-btn.active');
  if (!activeBtn) return null;
  const compKey = activeBtn.dataset.comp;
  return PROJECTS[modalProjectId]?.competences[compKey] || null;
}

function closeModal() {
  document.getElementById('e5-modal').classList.remove('open');
  document.body.style.overflow = '';
  modalProjectId = null;
}
/* ═══════════════════════════════════════════════════
   E5 — Filtres par bloc/compétence + Modal visionneuse
   e5.js
   ═══════════════════════════════════════════════════ */
console.log("E5 LOADED");
/* ─── DATA : Compétences par projet ─── */
const PROJECTS = {
  'mivdl-front': {
    label: 'Site Web MadeInValDeLoire',
    competences: {
      'WEB 1': {
        label: 'Développer la partie front-end d\'une interface utilisateur web',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/mivdl/web1-1.png', caption: 'Interface catalogue visiteur — HTML/CSS/JS' },
          { src: '/img/proofs/mivdl/web1-2.png', caption: 'Responsive mobile du catalogue' },
        ]
      },
      'WEB 3': {
        label: 'Développer des composants d\'accès aux données',
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
      'SRV 1': {
        label: 'Mettre en place et vérifier les niveaux d\'habilitation',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/mivdl/srv1-1.png', caption: 'Gestion des rôles utilisateurs (admin / producteur / visiteur)' },
        ]
      },
    }
  },

  'cyber': {
    label: 'Projet Cyber-entrainement',
    competences: {
      'GPI 1': {
        label: 'Gérer le patrimoine informatique',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/cyber/gpi1-1.png', caption: 'Documentation technique du projet' },
        ]
      },
      'GPI 3': {
        label: 'Gérer les données',
        bloc: 'GPI',
        preuves: [
          { src: '/img/proofs/cyber/gpi3-1.png', caption: 'Schéma de la base SQLite' },
        ]
      },
      'INC 1': {
        label: 'Protéger les données à caractère personnel',
        bloc: 'INC',
        preuves: [
          { src: '/img/proofs/cyber/inc1-1.png', caption: 'Chiffrement des données utilisateur' },
        ]
      },
      'PRJ 1': {
        label: 'Analyser les objectifs et les modalités d\'organisation d\'un projet',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/cyber/prj1-1.png', caption: 'Spécifications fonctionnelles' },
        ]
      },
      'SRV 3': {
        label: 'Faire évoluer un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/cyber/srv3-1.png', caption: 'Changelog et évolutions de l\'application' },
        ]
      },
    }
  },

  'ecommerce': {
    label: 'Site web e-commerce',
    competences: {
      'WEB 1': {
        label: 'Développer la partie front-end d\'une interface utilisateur web',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/ecommerce/web1-1.png', caption: 'Page d\'accueil boutique' },
          { src: '/img/proofs/ecommerce/web1-2.png', caption: 'Fiche produit' },
        ]
      },
      'WEB 3': {
        label: 'Développer des composants d\'accès aux données',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/ecommerce/web3-1.png', caption: 'Requêtes PHP/MySQL panier' },
        ]
      },
      'PRJ 1': {
        label: 'Analyser les objectifs et les modalités d\'organisation d\'un projet',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/ecommerce/prj1-1.png', caption: 'Analyse des besoins' },
        ]
      },
      'SRV 1': {
        label: 'Mettre en place et vérifier les niveaux d\'habilitation',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/ecommerce/srv1-1.png', caption: 'Authentification et sessions utilisateur' },
        ]
      },
      'SRV 2': {
        label: 'Mettre en place et optimiser une solution de sécurisation',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/ecommerce/srv2-1.png', caption: 'Sécurisation des formulaires (CSRF, injection SQL)' },
        ]
      },
    }
  },

  'citeradio-app': {
    label: 'Application CITERADIO',
    competences: {
      'WEB 1': {
        label: 'Développer la partie front-end d\'une interface utilisateur web',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/citeradio/web1-1.png', caption: 'Interface jeu concours visiteur' },
        ]
      },
      'WEB 3': {
        label: 'Développer des composants d\'accès aux données',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/citeradio/web3-1.png', caption: 'API PHP pour l\'app mobile' },
        ]
      },
      'PRJ 1': {
        label: 'Analyser les objectifs et les modalités d\'organisation d\'un projet',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/citeradio/prj1-1.png', caption: 'Brief client et cahier des charges' },
        ]
      },
      'PRJ 3': {
        label: 'Évaluer les indicateurs de suivi d\'un projet',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/citeradio/prj3-1.png', caption: 'Compte-rendu de livraison' },
        ]
      },
      'SRV 3': {
        label: 'Faire évoluer un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/citeradio/srv3-1.png', caption: 'Déploiement en milieu professionnel' },
        ]
      },
      'DEV 3': {
        label: 'Développer en équipe',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/citeradio/dev3-1.png', caption: 'Collaboration avec l\'équipe radio' },
        ]
      },
    }
  },

  'cheikhnico': {
    label: 'Site cheikhnico.org',
    competences: {
      'WEB 1': {
        label: 'Développer la partie front-end d\'une interface utilisateur web',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/cheikhnico/web1-1.png', caption: 'Page d\'accueil thème sur-mesure' },
          { src: '/img/proofs/cheikhnico/web1-2.png', caption: 'Vue mobile' },
        ]
      },
      'WEB 2': {
        label: 'Développer la partie back-end d\'une interface utilisateur web',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/cheikhnico/web2-1.png', caption: 'Templates PHP WordPress' },
          { src: '/img/proofs/cheikhnico/web2-2.png', caption: 'functions.php — hooks personnalisés' },
        ]
      },
      'WEB 3': {
        label: 'Développer des composants d\'accès aux données',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/cheikhnico/web3-1.png', caption: 'WP_Query et custom post types' },
        ]
      },
      'PRJ 1': {
        label: 'Analyser les objectifs et les modalités d\'organisation d\'un projet',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/cheikhnico/prj1-1.png', caption: 'Maquette Figma validée avec le client' },
        ]
      },
      'SRV 3': {
        label: 'Faire évoluer un service',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/cheikhnico/srv3-1.png', caption: 'Déploiement et mise en production' },
        ]
      },
      'DEV 3': {
        label: 'Développer en équipe',
        bloc: 'DEV',
        preuves: [
          { src: '/img/proofs/cheikhnico/dev3-1.png', caption: 'Git — historique des commits' },
        ]
      },
    }
  },

  'dominique': {
    label: 'Landing page Dominique Chauvelier',
    competences: {
      'WEB 1': {
        label: 'Développer la partie front-end d\'une interface utilisateur web',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/dominique/web1-1.png', caption: 'Landing page desktop' },
          { src: '/img/proofs/dominique/web1-2.png', caption: 'Landing page mobile' },
        ]
      },
      'WEB 2': {
        label: 'Développer la partie back-end d\'une interface utilisateur web',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/dominique/web2-1.png', caption: 'Formulaire de contact fonctionnel' },
        ]
      },
      'WEB 3': {
        label: 'Développer des composants d\'accès aux données',
        bloc: 'WEB',
        preuves: [
          { src: '/img/proofs/dominique/web3-1.png', caption: 'Animations CSS au scroll' },
        ]
      },
      'PRJ 1': {
        label: 'Analyser les objectifs et les modalités d\'organisation d\'un projet',
        bloc: 'PRJ',
        preuves: [
          { src: '/img/proofs/dominique/prj1-1.png', caption: 'Brief client et livrables' },
        ]
      },
      'SRV 1': {
        label: 'Mettre en place et vérifier les niveaux d\'habilitation',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/dominique/srv1-1.png', caption: 'Configuration hébergement' },
        ]
      },
      'SRV 2': {
        label: 'Mettre en place et optimiser une solution de sécurisation',
        bloc: 'SRV',
        preuves: [
          { src: '/img/proofs/dominique/srv2-1.png', caption: 'HTTPS, headers de sécurité' },
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
    const cfg = BLOCS[bloc];
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
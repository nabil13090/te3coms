export const NAV_LINKS = [
  { href: '/offre/landing-page', label: '699€' },
  { href: '/realisations', label: 'Projets' },
  { href: '/services', label: 'Services' },
  { href: '/services/referencement-seo', label: 'SEO' },
  { href: '/workflow', label: 'Méthode' },
  { href: '/agence', label: 'Agence' },
]

export const HERO_OFFER = {
  badge: 'Offre de lancement',
  title: 'Landing page sur mesure',
  price: '699',
  currency: '€',
  subtitle: 'Conception + développement + mise en ligne',
  cta: '/offre/landing-page',
}

export const SEO_OFFER = {
  badge: 'Visibilité Google',
  headline: 'Référencement naturel & SEO local',
  intro:
    'Un beau site ne sert à rien s\'il n\'est pas trouvé. Nous optimisons votre présence sur Google : technique, contenu, SEO local et suivi des positions pour générer du trafic qualifié.',
  description:
    'Audit complet, corrections techniques, stratégie de mots-clés et contenus optimisés. Idéal en complément d\'un site neuf ou d\'une refonte — ou en mission continue pour progresser mois après mois.',
  highlights: [
    'Audit SEO technique & sémantique',
    'Optimisation SEO local (Google Business)',
    'Rédaction & structure de contenus',
    'Suivi des positions & rapports mensuels',
  ],
  pillars: [
    {
      title: 'SEO technique',
      desc: 'Vitesse, Core Web Vitals, balises, indexation, maillage interne et structure HTML propre pour que Google comprenne votre site.',
    },
    {
      title: 'SEO sémantique',
      desc: 'Recherche de mots-clés, titres optimisés, contenus utiles pour votre audience et pages pensées pour répondre aux intentions de recherche.',
    },
    {
      title: 'SEO local',
      desc: 'Fiche Google Business, avis clients, pages géolocalisées — pour apparaître quand vos prospects cherchent un prestataire près de chez eux.',
    },
    {
      title: 'Suivi & reporting',
      desc: 'Tableau de bord des positions, trafic organique et recommandations mensuelles pour améliorer continuellement votre visibilité.',
    },
  ],
  stats: [
    { value: '+25%', label: 'Visibilité organique moyenne' },
    { value: '90+', label: 'Score PageSpeed visé' },
    { value: '12 mois', label: 'Accompagnement possible' },
  ],
  includes: [
    'Audit SEO complet (technique + contenu)',
    'Optimisation on-page (title, meta, Hn, images)',
    'Configuration Google Search Console & Analytics',
    'Stratégie mots-clés par page',
    'Recommandations SEO local',
    'Rapport mensuel des positions',
  ],
  forWho: [
    'Artisans & commerces locaux',
    'PME qui veulent plus de leads Google',
    'Sites récents sans trafic organique',
    'Entreprises après refonte de site',
  ],
}

export const CLIENT_LOGOS = [
  'Electrotech', 'Écolave', 'CouvreurPro', 'Keryaloc', 'HôtelOS 360', 'Attal P.L.', 'Cupping Room', 'Gardanne Autos',
]

export const DELIVERY_RANGES = [
  {
    type: 'Landing page (1 page)',
    range: '10 à 15 jours ouvrés',
    detail: 'Offre fixe 699 € — brief, maquette, dev, mise en ligne.',
  },
  {
    type: 'Site vitrine (5–8 pages)',
    range: '3 à 5 semaines',
    detail: 'WordPress ou Next.js selon vos besoins de gestion de contenu.',
  },
  {
    type: 'Site corporate (10+ pages)',
    range: '4 à 8 semaines',
    detail: 'Multi-services, SEO, formulaires avancés — délai selon périmètre.',
  },
  {
    type: 'Marketplace / catalogue B2B',
    range: '6 à 10 semaines',
    detail: 'Fiches produits, filtres, back-office — complexité du stock.',
  },
  {
    type: 'SaaS / CRM sur mesure',
    range: '8 à 16 semaines (MVP)',
    detail: 'Développement par sprints de 2 semaines avec démos régulières.',
  },
  {
    type: 'Refonte complète',
    range: '4 à 12 semaines',
    detail: 'Audit, migration SEO, nouveau design — selon taille du site existant.',
  },
]

export const TECH_STACK_GROUPS = [
  {
    label: 'Front-end',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    label: 'Back-end',
    items: ['Node.js', 'PHP', 'API REST', 'PostgreSQL', 'MySQL'],
  },
  {
    label: 'CMS & gestion',
    items: ['WordPress', 'Elementor', 'Headless CMS', 'Custom admin'],
  },
  {
    label: 'Outils & déploiement',
    items: ['Git', 'Vercel', 'Hostinger', 'Stripe', 'Google Analytics', 'Search Console'],
  },
]

export const LANDING_OFFER = {
  slug: 'landing-page',
  title: 'Landing page professionnelle',
  price: 699,
  tagline: 'Votre conception site web & landing page à partir de 699 €',
  headline: 'Une page qui convertit. Livrée clé en main.',
  description:
    'Idéal pour lancer une activité, tester une offre ou remplacer une page obsolète. Nous concevons une landing page claire, rapide et orientée prise de contact — design sur mesure, textes structurés, formulaire et mise en ligne inclus.',
  includes: [
    'Brief & cadrage de votre message en visio (30 min)',
    'Maquette UX/UI adaptée à votre secteur',
    'Développement responsive (mobile, tablette, desktop)',
    'Formulaire de contact ou prise de RDV',
    'Optimisation vitesse & balises SEO de base',
    'Mise en ligne + formation rapide à la gestion',
  ],
  idealFor: [
    'Artisans, indépendants & TPE qui veulent être visibles',
    'Lancement de produit ou nouvelle offre',
    'Campagnes Google / Meta qui ont besoin d\'une page dédiée',
    'Remplacement d\'une page Wix/WordPress trop lente',
  ],
  deliveryDays: '10 à 15 jours ouvrés',
  options: [
    { name: 'Pages supplémentaires', detail: 'À partir de 199 € / page' },
    { name: 'Rédaction complète', detail: 'À partir de 149 €' },
    { name: 'SEO avancé', detail: 'Sur devis' },
    { name: 'Maintenance mensuelle', detail: 'À partir de 49 € / mois' },
  ],
}

export const WORKFLOW_STEPS = [
  {
    num: '01',
    title: 'Échange & brief',
    duration: 'Jour 1–2',
    desc: 'Appel de cadrage pour comprendre votre activité, vos clients et l\'objectif de la page (leads, RDV, vente). Nous définissons ensemble le message principal et la structure.',
    deliverables: ['Questionnaire projet', 'Arborescence de la page', 'Planning validé'],
  },
  {
    num: '02',
    title: 'Conception & maquette',
    duration: 'Jour 3–6',
    desc: 'Nous traduisons votre positionnement en une maquette visuelle : hiérarchie des titres, blocs de réassurance, CTA et parcours mobile. Vous validez avant le code.',
    deliverables: ['Maquette Figma / prototype', '1 aller-retour inclus', 'Charte couleurs & typo'],
  },
  {
    num: '03',
    title: 'Développement',
    duration: 'Jour 7–11',
    desc: 'Intégration en Next.js : performances, responsive, formulaires, tracking si besoin. Code propre, rapide et prêt pour évoluer vers un site complet.',
    deliverables: ['Page responsive', 'Formulaire fonctionnel', 'Tests multi-navigateurs'],
  },
  {
    num: '04',
    title: 'SEO & contenus',
    duration: 'Jour 12–13',
    desc: 'Balises title/meta, structure Hn, images optimisées, vitesse de chargement. Nous intégrons vos textes ou vous aidons à les finaliser.',
    deliverables: ['SEO on-page', 'Open Graph', 'Rapport PageSpeed'],
  },
  {
    num: '05',
    title: 'Mise en ligne & formation',
    duration: 'Jour 14–15',
    desc: 'Déploiement sur votre domaine, SSL, tests finaux. Session de prise en main pour que vous soyez autonome sur les modifications simples.',
    deliverables: ['Site en production', 'Accès & doc', 'Support 30 jours'],
  },
]

export const CASE_STUDY = {
  client: 'Electrotech 13',
  sector: 'Bâtiment · Électricité',
  title: 'Un site corporate qui inspire confiance et génère des devis',
  metrics: [
    { value: '5', suffix: ' sem.', label: 'Délai de livraison' },
    { value: '+40', suffix: '%', label: 'Demandes de devis' },
    { value: '5.0', suffix: '', label: 'Note Google' },
    { value: '12', suffix: '', label: 'Pages livrées' },
  ],
  summary:
    'Refonte complète orientée crédibilité : historique 40 ans, certifications IRVE, logos grands comptes et parcours vers appel / devis gratuit. Un site pensé pour rassurer les particuliers comme les donneurs d\'ordre.',
  context:
    'Électricien marseillais depuis plus de 40 ans, avec des références nationales (Carrefour, Auchan, La Poste) mais un site web qui ne reflétait plus son niveau d\'expertise.',
  challenge:
    'Convaincre à la fois les particuliers (dépannage urgent) et les professionnels (chantiers, maintenance) sans créer deux sites séparés.',
  solution:
    'Architecture multi-cibles avec hero percutant, preuve sociale (142 avis Google), pages services détaillées, bandeau logos clients et double parcours de conversion (devis / appel).',
  deliveryTime: '5 semaines',
  pages: [
    'Accueil', 'Nos services', 'Dépannage 24h', 'Rénovation électrique',
    'Bornes IRVE', 'Clients & références', 'Certifications', 'Devis gratuit', 'Contact',
  ],
  features: [
    'Hero avec preuve sociale et CTA double',
    'Logos grands comptes (Carrefour, Auchan, La Poste…)',
    'Pages services par typologie de client',
    'Certifications IRVE / RGE mises en avant',
    'Formulaire devis + click-to-call mobile',
    'SEO local Marseille & Bouches-du-Rhône',
  ],
  techStack: {
    frontend: ['HTML5', 'CSS3', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'API Routes Next.js'],
    tools: ['Vercel', 'Google Analytics', 'Google Business', 'Git'],
  },
  url: 'https://electrotech-sud.fr/',
  image: '/screenshots/electrotech13.png',
  mockupImage: '/mockups/electrotech-laptop.png',
  slug: 'electrotech-13',
}

export const SERVICES = [
  {
    slug: 'creation-saas',
    num: '01',
    title: 'Création SaaS',
    shortDesc: 'Plateformes métier scalables, du MVP au produit complet.',
    desc: 'Nous concevons et développons des logiciels SaaS sur mesure : architecture cloud, espaces utilisateurs, abonnements, tableaux de bord et intégrations API. De l\'idée au déploiement, avec une base technique pensée pour évoluer.',
    longDesc:
      'Vous avez une idée de produit récurrent ? Nous structurons le parcours utilisateur, les rôles (admin, client, équipe), la facturation et les tableaux de bord. Chaque module est pensé pour scaler sans tout reconstruire dans 6 mois. Développement en sprints avec démos bi-mensuelles.',
    deliveryRange: '8 à 16 semaines (MVP) — selon périmètre fonctionnel',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'API REST'],
    techStack: {
      frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
      backend: ['Node.js', 'API REST', 'PostgreSQL', 'Webhooks'],
      tools: ['Stripe', 'Vercel', 'Git', 'Docker'],
    },
    scope: ['Espace utilisateur & admin', 'Authentification & rôles', 'Tableau de bord', 'Facturation / abonnements', 'API & intégrations', 'Documentation technique'],
    highlights: ['Cadrage produit & roadmap', 'UX/UI orientée conversion', 'Développement agile par sprints', 'Mise en production & suivi'],
    benefits: ['Revenus récurrents automatisés', 'Process métier centralisé', 'Données exploitables en temps réel'],
    forWho: 'Startups, éditeurs logiciels, PME qui digitalisent un service récurrent',
  },
  {
    slug: 'site-web',
    num: '02',
    title: 'Site Web',
    shortDesc: 'Sites vitrines, landing pages et e-commerce performants.',
    desc: 'Des sites web clairs, rapides et optimisés SEO. Nous structurons vos contenus, simplifions les parcours utilisateurs et créons des expériences qui transforment vos visiteurs en prospects qualifiés.',
    longDesc:
      'Votre site est votre premier commercial. Nous travaillons le message, la preuve sociale, les appels à l\'action et la vitesse de chargement. Du site vitrine 5 pages à l\'e-commerce, tout est sur mesure — WordPress pour l\'autonomie contenu, ou Next.js pour la performance maximale.',
    deliveryRange: '3 à 8 semaines — selon nombre de pages et contenus',
    tags: ['Next.js', 'WordPress', 'HTML/CSS', 'SEO', 'Responsive'],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
      backend: ['Node.js', 'PHP', 'WordPress'],
      cms: ['WordPress', 'Elementor', 'Headless CMS'],
      tools: ['Vercel', 'Hostinger', 'Google Analytics', 'Git'],
    },
    scope: ['Accueil & pages services', 'À propos & contact', 'Formulaires & devis', 'Blog (option)', 'SEO on-page', 'Mise en ligne & formation'],
    highlights: ['Wireframes & maquettes', 'Design sur mesure', 'Développement responsive', 'Optimisation performance & SEO'],
    benefits: ['Visibilité Google renforcée', 'Image professionnelle', 'Plus de contacts qualifiés'],
    forWho: 'Artisans, professions libérales, PME, marques en croissance',
  },
  {
    slug: 'crm-sur-mesure',
    num: '03',
    title: 'CRM Sur Mesure',
    shortDesc: 'Gestion client adaptée à vos processus métier.',
    desc: 'Fini les CRM génériques qui ne collent pas à votre activité. Nous développons des outils de gestion client sur mesure : pipeline commercial, automatisations, reporting et connexion à votre écosystème existant.',
    longDesc:
      'Pipeline sur mesure, relances automatiques, fiches clients enrichies, exports compta, intégration email / calendrier / téléphonie. Vous gardez uniquement les champs et étapes qui servent vraiment votre équipe — pas 200 fonctionnalités inutiles.',
    deliveryRange: '6 à 12 semaines — selon modules et intégrations',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Automatisation', 'API'],
    techStack: {
      frontend: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3'],
      backend: ['Node.js', 'API REST', 'PostgreSQL', 'Cron jobs'],
      tools: ['Webhooks', 'SendGrid', 'Git', 'Vercel / VPS'],
    },
    scope: ['Pipeline commercial personnalisé', 'Fiches clients & historique', 'Automatisations email/SMS', 'Reporting & exports', 'Intégrations tierces', 'Formation équipe'],
    highlights: ['Audit des processus métier', 'Interface intuitive sur mesure', 'Automatisations configurables', 'Formation & accompagnement'],
    benefits: ['Moins de temps perdu en admin', 'Suivi commercial lisible', 'Décisions basées sur des données'],
    forWho: 'Équipes commerciales, agences, sociétés de services B2B',
  },
  {
    slug: 'application-pwa',
    num: '04',
    title: 'Application & PWA',
    shortDesc: 'Applications web installables, rapides et offline-ready.',
    desc: 'Applications web progressives et apps métier accessibles depuis n\'importe quel appareil. Installation sur mobile, notifications, mode hors-ligne et performances natives — sans passer par les stores.',
    longDesc:
      'Idéal pour les équipes terrain, la réservation, le suivi de missions ou un portail client. Installation sur l\'écran d\'accueil, notifications push, synchronisation offline — le confort d\'une app native avec React/Next.js, sans les contraintes App Store.',
    deliveryRange: '6 à 14 semaines — selon fonctionnalités offline & sync',
    tags: ['PWA', 'React', 'Next.js', 'Service Workers', 'Mobile-first'],
    techStack: {
      frontend: ['React', 'Next.js', 'TypeScript', 'PWA', 'HTML5', 'CSS3'],
      backend: ['Node.js', 'API REST', 'WebSockets', 'PostgreSQL'],
      tools: ['Service Workers', 'Push API', 'Git', 'Vercel'],
    },
    scope: ['App installable (écran d\'accueil)', 'Mode hors-ligne', 'Notifications push', 'Sync temps réel', 'Interface mobile native', 'Mises à jour instantanées'],
    highlights: ['Expérience mobile native', 'Installation sans store', 'Synchronisation temps réel', 'Maintenance continue incluse'],
    benefits: ['Accessible partout', 'Pas de commission store (15–30 %)', 'Mises à jour instantanées'],
    forWho: 'Hôtellerie, logistique, maintenance, réseaux de franchises',
  },
  {
    slug: 'refonte-site',
    num: '05',
    title: 'Refonte de Site',
    shortDesc: 'Modernisez votre présence digitale sans perdre en SEO.',
    desc: 'Votre site actuel ne convertit plus ? Nous repensons l\'architecture, le design et la technique pour un site moderne, performant et aligné avec vos objectifs business — en préservant votre visibilité Google.',
    longDesc:
      'Audit UX, benchmark concurrentiel, nouvelle arborescence, migration SEO (redirections 301, contenus), design actuel et performances Core Web Vitals. Que votre site actuel soit en WordPress, HTML statique ou autre CMS — nous migrons proprement.',
    deliveryRange: '4 à 12 semaines — selon taille du site existant',
    tags: ['Audit UX', 'Migration SEO', 'WordPress', 'Next.js', 'Performance'],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'React', 'Next.js', 'JavaScript'],
      backend: ['Node.js', 'PHP', 'WordPress'],
      cms: ['WordPress', 'Migration contenus'],
      tools: ['Google Search Console', 'Screaming Frog', 'Git', '301 redirects'],
    },
    scope: ['Audit UX & SEO complet', 'Nouvelle arborescence', 'Design system moderne', 'Migration contenus & URLs', 'Redirections 301', 'Suivi post-lancement 30 jours'],
    highlights: ['Audit complet avant/après', 'Nouveau design system', 'Migration SEO sans coupure', 'Suivi post-lancement'],
    benefits: ['Taux de conversion en hausse', 'Image modernisée', 'SEO préservé ou amélioré'],
    forWho: 'Sites vieillissants (WordPress, HTML, Wix), entreprises en repositionnement',
  },
  {
    slug: 'referencement-seo',
    num: '06',
    title: 'Référencement SEO',
    shortDesc: 'Visibilité Google, trafic qualifié et SEO local.',
    desc: 'Nous optimisons votre site et votre écosystème digital pour apparaître en haut des résultats Google : audit technique, contenus, SEO local et suivi mensuel des performances.',
    longDesc:
      'Google ne laisse rien au hasard. Nous travaillons la technique (vitesse, indexation, balises HTML), le contenu (mots-clés, pages services, blog) et le local (Google Business, avis). Compatible avec tous nos sites — WordPress, Next.js ou autre.',
    deliveryRange: 'Audit en 1 semaine — accompagnement mensuel continu',
    tags: ['SEO technique', 'SEO local', 'Google Business', 'Contenu', 'HTML sémantique'],
    techStack: {
      frontend: ['HTML5 sémantique', 'Schema.org', 'Core Web Vitals'],
      backend: ['Sitemap XML', 'Robots.txt', 'Redirections'],
      tools: ['Search Console', 'Analytics', 'PageSpeed Insights', 'Semrush / Ahrefs'],
    },
    scope: ['Audit SEO technique & sémantique', 'Optimisation on-page (title, meta, Hn)', 'Stratégie mots-clés', 'SEO local & Google Business', 'Rédaction contenus optimisés', 'Rapport mensuel positions'],
    highlights: ['Audit SEO complet', 'Optimisation on-page', 'Stratégie mots-clés par page', 'Suivi mensuel & recommandations'],
    benefits: ['Plus de trafic organique', 'Leads sans publicité payante', 'Crédibilité renforcée sur Google'],
    forWho: 'Artisans, PME locales, sites sans visibilité, post-refonte',
  },
]

export const EXPERTISE_PILLARS = [
  {
    icon: '◆',
    title: 'Focus conversion',
    desc: 'Chaque bloc, chaque CTA est pensé pour transformer vos visiteurs en prospects. Pas de décoratif inutile.',
  },
  {
    icon: '◇',
    title: '100 % sur mesure',
    desc: 'Pas de template recyclé. Votre secteur, votre ton, vos objectifs — le site vous appartient à 100 %.',
  },
  {
    icon: '○',
    title: 'Transparence',
    desc: 'Devis clair, planning partagé, points réguliers. Vous savez où en est votre projet à chaque étape.',
  },
]

export const RESULTS = [
  { value: 21, suffix: '%', label: 'Taux de conversion', note: 'Après refonte site & parcours utilisateur' },
  { value: 19, suffix: '%', label: 'Demandes qualifiées', note: 'Après optimisation des CTA et formulaires' },
  { value: 25, suffix: '%', label: 'Visibilité Google', note: 'Dans les 12 mois suivant le déploiement SEO' },
  { value: 16, suffix: '%', label: 'Engagement contenu', note: 'Après restructuration de l\'offre digitale' },
]

export const STATS = [
  { value: 20, suffix: '+', label: 'Projets livrés' },
  { value: 100, suffix: '%', label: 'Clients satisfaits' },
  { value: 15, suffix: '+', label: 'Apps SaaS actives' },
  { value: 24, suffix: 'h', label: 'Réactivité support' },
]

export const PROCESS = [
  { num: '01', title: 'Découverte', desc: 'Analyse de vos besoins, de votre marché et de vos objectifs pour cadrer la meilleure stratégie digitale.' },
  { num: '02', title: 'Conception', desc: 'Maquettes UX/UI, prototypes interactifs et validation visuelle avant tout développement.' },
  { num: '03', title: 'Développement', desc: 'Code propre, agile et documenté. Sprints réguliers, démos client et tests continus.' },
  { num: '04', title: 'Lancement', desc: 'Mise en production, monitoring et accompagnement post-lancement pour un démarrage sans failles.' },
]

export const TESTIMONIALS = [
  {
    quote: 'Le site nous apporte de nouvelles demandes chaque semaine. Design pro, rapide, et une équipe qui comprend vite nos enjeux.',
    author: 'Karim B.',
    role: 'Directeur — PME BTP',
    type: 'Site web & SEO',
    rating: 5,
  },
  {
    quote: 'Refonte complète en un temps record. On est enfin visible sur Google et les prises de contact ont clairement augmenté.',
    author: 'Sophie L.',
    role: 'Responsable marketing',
    type: 'Refonte site web',
    rating: 5,
  },
  {
    quote: 'Le CRM sur mesure a transformé notre suivi commercial. Fini les tableurs, tout est centralisé et automatisé.',
    author: 'Mehdi A.',
    role: 'Fondateur — Agence immo',
    type: 'CRM sur mesure',
    rating: 5,
  },
]

export const FAQ = [
  {
    category: 'SEO',
    question: 'Proposez-vous du référencement SEO ?',
    answer: 'Oui — audit technique, optimisation on-page, SEO local (Google Business), stratégie de mots-clés et suivi mensuel. En complément d\'un site neuf, d\'une refonte ou en mission continue. Voir notre offre détaillée sur la page Référencement SEO.',
  },
  {
    category: 'Offre 699 €',
    question: 'Que comprend exactement la landing page à 699 € ?',
    answer: 'Une page unique sur mesure (design + développement), formulaire de contact, responsive, SEO de base, mise en ligne et 30 jours de support. Le brief et 1 aller-retour sur la maquette sont inclus. Domaine et hébergement non inclus (nous pouvons vous guider).',
  },
  {
    category: 'Général',
    question: 'Pourquoi faire appel à TE3COMS plutôt qu\'un freelance ou un template ?',
    answer: 'Nous combinons stratégie, design et développement dans une équipe structurée. Vous avez un interlocuteur, un planning clair et un résultat pensé pour convertir — pas un thème générique à adapter seul.',
  },
  {
    category: 'Général',
    question: 'Comment se déroule un projet avec TE3COMS ?',
    answer: 'Brief → maquette → développement → mise en ligne. Des points réguliers à chaque étape. Pour les projets plus complexes (SaaS, CRM), nous ajoutons des sprints et une roadmap produit.',
  },
  {
    category: 'Services',
    question: 'Quels types de projets accompagnez-vous ?',
    answer: 'Landing pages, sites vitrines, plateformes SaaS, CRM sur mesure, applications PWA, refontes et marketplaces. TPE, PME et startups.',
  },
  {
    category: 'Technique',
    question: 'Quelles technologies utilisez-vous ?',
    answer: 'Nous maîtrisons un stack complet : HTML5, CSS3, JavaScript, React, Next.js, Node.js, TypeScript, PHP et WordPress. Pour les projets sur mesure (SaaS, CRM), nous utilisons React/Next.js + Node.js + PostgreSQL. Pour les sites vitrines autonomes, WordPress ou Next.js selon vos besoins. Chaque projet est livré avec Git, déploiement sécurisé et documentation.',
  },
  {
    category: 'Délais',
    question: 'Quels sont vos délais de livraison ?',
    answer: 'Les délais varient selon le projet : landing page 10–15 jours (offre 699 €), site vitrine 3–5 semaines, site corporate 4–8 semaines, marketplace 6–10 semaines, SaaS/CRM 8–16 semaines en sprints. Un planning précis est défini au brief et partagé avant démarrage.',
  },
]

export const MARQUEE_ITEMS = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Node.js', 'PHP', 'WordPress',
  'TypeScript', 'SaaS', 'CRM', 'PWA', 'Landing Page 699€', 'SEO', 'PostgreSQL',
]

export const AGENCY = {
  title: "L'agence qui transforme vos idées en levier de croissance",
  description:
    'TE3COMS accompagne les entreprises ambitieuses : sites web orientés résultats, outils métier sur mesure et stratégie digitale claire. Plus de 20 projets livrés avec une exigence constante sur la qualité et les délais.',
  values: [
    { title: 'Performance', desc: 'Chaque livrable est mesuré : vitesse, SEO, taux de conversion. Nous visons des résultats concrets.' },
    { title: 'Sur mesure', desc: 'Votre métier est unique. Nos solutions le sont aussi — pas de copier-coller.' },
    { title: 'Partenariat', desc: 'Nous restons disponibles après la mise en ligne : évolutions, maintenance, conseil.' },
  ],
}

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
  'Electrotech', 'Keryaloc', 'HôtelOS 360', 'Attal P.L.', 'Cupping Room', 'Gardanne Autos',
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
    { value: '19', suffix: 'j', label: 'Délai de livraison' },
    { value: '+40', suffix: '%', label: 'Demandes de devis' },
    { value: '5.0', suffix: '', label: 'Note Google' },
    { value: '24', suffix: 'h', label: 'Dépannage affiché' },
  ],
  summary:
    'Refonte complète orientée crédibilité : historique 40 ans, certifications IRVE, logos grands comptes et parcours vers appel / devis gratuit. Un site pensé pour rassurer les particuliers comme les donneurs d\'ordre.',
  url: 'https://electrotech-sud.fr/',
  image: '/screenshots/electrotech13.png',
}

export const SERVICES = [
  {
    slug: 'creation-saas',
    num: '01',
    title: 'Création SaaS',
    shortDesc: 'Plateformes métier scalables, du MVP au produit complet.',
    desc: 'Nous concevons et développons des logiciels SaaS sur mesure : architecture cloud, espaces utilisateurs, abonnements, tableaux de bord et intégrations API. De l\'idée au déploiement, avec une base technique pensée pour évoluer.',
    longDesc:
      'Vous avez une idée de produit récurrent ? Nous structurons le parcours utilisateur, les rôles (admin, client, équipe), la facturation et les tableaux de bord. Chaque module est pensé pour scaler sans tout reconstruire dans 6 mois.',
    tags: ['Architecture cloud', 'Multi-tenant', 'Stripe', 'API REST', 'Dashboard'],
    highlights: ['Cadrage produit & roadmap', 'UX/UI orientée conversion', 'Développement agile', 'Mise en production & suivi'],
    benefits: ['Revenus récurrents automatisés', 'Process métier centralisé', 'Données exploitables en temps réel'],
    forWho: 'Startups, éditeurs logiciels, PME qui digitalisent un service',
  },
  {
    slug: 'site-web',
    num: '02',
    title: 'Site Web',
    shortDesc: 'Sites vitrines, landing pages et e-commerce performants.',
    desc: 'Des sites web clairs, rapides et optimisés SEO. Nous structurons vos contenus, simplifions les parcours utilisateurs et créons des expériences qui transforment vos visiteurs en prospects qualifiés.',
    longDesc:
      'Votre site est votre premier commercial. Nous travaillons le message, la preuve sociale, les appels à l\'action et la vitesse de chargement. Du site vitrine 5 pages à l\'e-commerce, tout est sur mesure — pas de thème générique.',
    tags: ['Next.js', 'UX/UI Design', 'SEO', 'Site vitrine', 'E-commerce'],
    highlights: ['Wireframes & maquettes', 'Design sur mesure', 'Développement responsive', 'Optimisation performance'],
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
      'Pipeline sur mesure, relances automatiques, fiches clients enrichies, exports compta, intégration email / calendrier / téléphonie. Vous gardez uniquement les champs et étapes qui servent vraiment votre équipe.',
    tags: ['Pipeline', 'Automatisation', 'Reporting', 'Intégrations', 'Workflows'],
    highlights: ['Audit des processus', 'Interface intuitive', 'Automatisations sur mesure', 'Formation & accompagnement'],
    benefits: ['Moins de temps perdu en admin', 'Suivi commercial lisible', 'Décisions basées sur des données'],
    forWho: 'Équipes commerciales, agences, sociétés de services',
  },
  {
    slug: 'application-pwa',
    num: '04',
    title: 'Application & PWA',
    shortDesc: 'Applications web installables, rapides et offline-ready.',
    desc: 'Applications web progressives et apps métier accessibles depuis n\'importe quel appareil. Installation sur mobile, notifications, mode hors-ligne et performances natives — sans passer par les stores.',
    longDesc:
      'Idéal pour les équipes terrain, la réservation, le suivi de missions ou un portail client. Installation sur l\'écran d\'accueil, notifications push, synchronisation offline — le confort d\'une app sans les contraintes App Store.',
    tags: ['PWA', 'React', 'Mobile-first', 'Offline', 'Notifications'],
    highlights: ['Expérience mobile native', 'Installation écran d\'accueil', 'Synchronisation temps réel', 'Maintenance continue'],
    benefits: ['Accessible partout', 'Pas de commission store', 'Mises à jour instantanées'],
    forWho: 'Hôtellerie, logistique, maintenance, réseaux de franchises',
  },
  {
    slug: 'refonte-site',
    num: '05',
    title: 'Refonte de Site',
    shortDesc: 'Modernisez votre présence digitale sans perdre en SEO.',
    desc: 'Votre site actuel ne convertit plus ? Nous repensons l\'architecture, le design et la technique pour un site moderne, performant et aligné avec vos objectifs business — en préservant votre visibilité Google.',
    longDesc:
      'Audit UX, benchmark concurrentiel, nouvelle arborescence, migration SEO (redirections 301, contenus), design actuel et performances Core Web Vitals. Vous repartez sur une base saine sans perdre votre historique Google.',
    tags: ['Audit UX', 'Migration SEO', 'Performance', 'Accessibilité', 'Contenu'],
    highlights: ['Audit complet', 'Nouveau design system', 'Migration sans coupure', 'Suivi post-lancement'],
    benefits: ['Taux de conversion en hausse', 'Image modernisée', 'SEO préservé ou amélioré'],
    forWho: 'Sites vieillissants, entreprises en repositionnement',
  },
  {
    slug: 'referencement-seo',
    num: '06',
    title: 'Référencement SEO',
    shortDesc: 'Visibilité Google, trafic qualifié et SEO local.',
    desc: 'Nous optimisons votre site et votre écosystème digital pour apparaître en haut des résultats Google : audit technique, contenus, SEO local et suivi mensuel des performances.',
    longDesc:
      'Google ne laisse rien au hasard. Nous travaillons la technique (vitesse, indexation, balises), le contenu (mots-clés, pages services, blog) et le local (Google Business, avis). Objectif : des visiteurs qui cherchent exactement ce que vous proposez.',
    tags: ['SEO technique', 'SEO local', 'Google Business', 'Contenu', 'Reporting'],
    highlights: ['Audit SEO complet', 'Optimisation on-page', 'Stratégie mots-clés', 'Suivi mensuel'],
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
    answer: 'Next.js, React, TypeScript, Node.js, PostgreSQL, Tailwind CSS. Stack moderne, performante et maintenable.',
  },
]

export const MARQUEE_ITEMS = [
  'Next.js', 'React', 'TypeScript', 'SaaS', 'CRM', 'PWA',
  'Landing Page 699€', 'SEO', 'UI/UX', 'Stripe', 'Vercel',
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

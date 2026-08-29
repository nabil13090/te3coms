import { MarketplaceProject } from '@/types/marketplace'

export const MARKETPLACE_PROJECTS: MarketplaceProject[] = [
  {
    id: 1,
    slug: 'khaki-crane-medical-platform',
    name: 'Plateforme Médicale SaaS',
    category: 'Medical',
    status: 'live',
    shortDesc: 'Plateforme médicale orientée parcours patient, prise de rendez-vous et visibilité locale.',
    fullDesc:
      'Centre de soins spécialisé : nous avons conçu une vitrine digitale complète pour présenter les spécialités, rassurer les patients et convertir les visites en demandes de rendez-vous. Architecture claire, contenus médicaux structurés et formulaires de contact optimisés.',
    context:
      'Un cabinet médical qui souhaitait remplacer un site vieillissant par une présence en ligne crédible, adaptée au mobile et visible sur Google pour les recherches locales (Marseille et environs).',
    challenge:
      'Concilier exigences médicales (rassurance, clarté des soins proposés) et objectif business (plus de prises de rendez-vous). Le site devait charger vite et être simple à mettre à jour.',
    solution:
      'Parcours patient en 3 clics : accueil → spécialités → contact/RDV. Pages dédiées par type de soin, témoignages, FAQ et bloc réassurance. SEO local intégré dès la conception.',
    deliveryTime: '4 semaines',
    pages: ['Accueil', 'Nos spécialités', 'Équipe médicale', 'Tarifs & remboursements', 'FAQ', 'Contact / RDV', 'Mentions légales'],
    features: [
      'Formulaire de prise de rendez-vous',
      'Pages spécialités optimisées SEO',
      'Design responsive mobile-first',
      'Intégration Google Maps',
      'Balises schema.org santé',
      'Performance PageSpeed 90+',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SEO local'],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'API Routes Next.js'],
      tools: ['Vercel', 'Google Search Console', 'Google Analytics', 'Git'],
    },
    results: [
      { value: '4 sem.', label: 'Délai de livraison' },
      { value: '7', label: 'Pages livrées' },
      { value: '90+', label: 'Score PageSpeed' },
      { value: '+30%', label: 'Prises de contact' },
    ],
    demoUrl: 'https://khaki-crane-381915.hostingersite.com',
    accentColor: '#7C6EFA',
    screenshot: '/screenshots/medical-cabinet.png',
  },
  {
    id: 2,
    slug: 'cupping-room',
    name: 'Cupping Room',
    category: 'Medical',
    status: 'live',
    shortDesc: 'Site premium hijama & cupping therapy — branding haut de gamme et conversion RDV.',
    fullDesc:
      'Cupping Room est une référence hijama à Marseille. Nous avons créé une expérience éditoriale premium : hero immersif, argumentaire santé/bien-être, présentation des protocoles et réservation simplifiée.',
    context:
      'Activité de thérapie hijama en pleine croissance, avec une clientèle exigeante qui compare les praticiens en ligne avant de réserver.',
    challenge:
      'Se différencier des sites médicaux génériques tout en inspirant confiance. Mettre en avant le sérieux du protocole sans aspect « cheap wellness ».',
    solution:
      'Direction artistique soignée, typographie élégante, photos plein écran et CTAs discrets mais visibles. Parcours mobile optimisé pour la réservation depuis Instagram/Google.',
    deliveryTime: '3 semaines',
    pages: ['Accueil', 'La hijama expliquée', 'Nos protocoles', 'Tarifs', 'À propos', 'Réserver', 'Contact'],
    features: [
      'Landing conversion-first',
      'Intégration Calendly / WhatsApp',
      'Galerie avant-après',
      'Section avis clients',
      'Blog SEO bien-être',
      'Multilingue FR/AR (structure)',
    ],
    stack: ['Next.js', 'React', 'Landing page', 'Branding', 'Conversion'],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
      backend: ['Node.js'],
      tools: ['Vercel', 'Google Business', 'Meta Pixel', 'Git'],
    },
    results: [
      { value: '3 sem.', label: 'Délai de livraison' },
      { value: '7', label: 'Pages livrées' },
      { value: '5.0', label: 'Note Google visée' },
      { value: '+45%', label: 'Réservations en ligne' },
    ],
    demoUrl: 'https://cupping-room.fr',
    accentColor: '#C084FC',
    screenshot: '/screenshots/cupping-room.png',
  },
  {
    id: 3,
    slug: 'attal-pl',
    name: 'Attal P.L. Marketplace',
    category: 'Garage et vente vehicule',
    status: 'live',
    shortDesc: 'Catalogue B2B poids lourds & matériel TP — fiches véhicules, filtres et contact direct.',
    fullDesc:
      'Marketplace professionnelle pour la vente de poids lourds et engins TP d\'occasion. Stock structuré par catégories, fiches détaillées avec photos, filtres par marque/prix et conversion vers appel ou demande d\'information.',
    context:
      'Négociant B2B avec un stock important, qui gérait les annonces manuellement et perdait du temps à répondre aux mêmes questions.',
    challenge:
      'Présenter un catalogue dense de manière lisible, permettre un filtrage rapide et générer des leads qualifiés (pas du trafic curieux).',
    solution:
      'Architecture catalogue avec fiches véhicules riches (specs, photos, prix), filtres dynamiques, annonces « à la une » et formulaire de demande par véhicule. Back-office simplifié pour ajouter/modifier les annonces.',
    deliveryTime: '6 semaines',
    pages: ['Accueil', 'Catalogue PL', 'Catalogue TP', 'Véhicule à la une', 'À propos', 'Contact', 'Demande d\'info'],
    features: [
      'Catalogue avec filtres (marque, prix, année)',
      'Fiches véhicules détaillées',
      'Galerie photos multi-vues',
      'Formulaire par annonce',
      'SEO pages catégories',
      'Back-office gestion stock',
    ],
    stack: ['WordPress', 'PHP', 'Catalogue', 'Filtres AJAX', 'SEO B2B'],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
      backend: ['PHP', 'WordPress', 'MySQL'],
      cms: ['WordPress', 'Custom Post Types'],
      tools: ['Hostinger', 'Google Analytics', 'Git'],
    },
    results: [
      { value: '6 sem.', label: 'Délai de livraison' },
      { value: '50+', label: 'Annonces gérées' },
      { value: '+35%', label: 'Demandes qualifiées' },
      { value: '24h', label: 'Mise à jour stock' },
    ],
    demoUrl: 'https://azure-wren-478191.hostingersite.com/',
    accentColor: '#F97316',
    screenshot: '/screenshots/attal-pl.png',
  },
  {
    id: 4,
    slug: 'gardanne-autos-pieces',
    name: 'Gardanne Autos Pièces',
    category: 'Garage et vente vehicule',
    status: 'live',
    shortDesc: 'Plateforme garage complète — atelier, carrosserie, véhicules d\'occasion et pièces détachées.',
    fullDesc:
      'Site vitrine multi-activités pour un garage automobile : présentation des prestations atelier/carrosserie, catalogue véhicules d\'occasion, pièces détachées et prise de rendez-vous en ligne.',
    context:
      'Garage familial avec plusieurs lignes de revenus (réparation, vente VO, pièces) qui avait besoin d\'un site unique pour tout présenter clairement.',
    challenge:
      'Unifier 3 activités différentes sans perdre l\'utilisateur. Faciliter la prise de RDV atelier tout en mettant en avant le stock véhicules.',
    solution:
      'Navigation par intent : « Réparer », « Acheter », « Pièces ». Pages services détaillées, catalogue VO filtrable et formulaire RDV avec choix de prestation.',
    deliveryTime: '5 semaines',
    pages: ['Accueil', 'Atelier mécanique', 'Carrosserie', 'Véhicules occasion', 'Pièces détachées', 'Devis en ligne', 'Contact'],
    features: [
      'Catalogue véhicules occasion',
      'Formulaire RDV atelier',
      'Devis carrosserie en ligne',
      'Présentation équipe & certifications',
      'SEO local garage',
      'Intégration téléphone click-to-call',
    ],
    stack: ['WordPress', 'PHP', 'HTML/CSS', 'Catalogue auto', 'SEO local'],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      backend: ['PHP', 'WordPress', 'MySQL'],
      cms: ['WordPress', 'Elementor'],
      tools: ['Hostinger', 'Google Business', 'Git'],
    },
    results: [
      { value: '5 sem.', label: 'Délai de livraison' },
      { value: '8', label: 'Pages livrées' },
      { value: '+28%', label: 'RDV atelier' },
      { value: '4.8', label: 'Note Google' },
    ],
    demoUrl: 'https://bisque-swan-351965.hostingersite.com/',
    accentColor: '#EF4444',
    screenshot: '/screenshots/gardanne-gap.png',
  },
  {
    id: 5,
    slug: 'electrotech-enr',
    name: 'Electrotech ENR',
    category: 'Batiment',
    status: 'live',
    shortDesc: 'Vitrine électricité & énergies renouvelables — expertise solaire et conversion devis.',
    fullDesc:
      'Site orienté ENR (énergies renouvelables) pour un électricien spécialisé panneaux solaires et bornes IRVE. Argumentaire technique accessible, certifications mises en avant et parcours devis gratuit.',
    context:
      'Extension de l\'activité Electrotech vers le solaire, avec un positionnement distinct de l\'électricité générale classique.',
    challenge:
      'Expliquer des offres techniques (photovoltaïque, IRVE) de façon compréhensible pour un particulier tout en rassurant sur les certifications RGE.',
    solution:
      'Pages pédagogiques par solution (solaire, borne, rénovation énergétique), calculateur de devis simplifié, logos certifications et cas clients avec chiffres concrets.',
    deliveryTime: '4 semaines',
    pages: ['Accueil', 'Panneaux solaires', 'Bornes IRVE', 'Rénovation énergétique', 'Certifications RGE', 'Réalisations', 'Devis gratuit'],
    features: [
      'Pages solutions ENR détaillées',
      'Bloc certifications RGE / QualiPV',
      'Galerie chantiers solaires',
      'Formulaire devis multi-étapes',
      'SEO local « électricien solaire »',
      'Intégration avis Google',
    ],
    stack: ['Next.js', 'React', 'SEO local', 'Landing conversion'],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      backend: ['Node.js', 'API Routes'],
      tools: ['Vercel', 'Google Search Console', 'Google Business', 'Git'],
    },
    results: [
      { value: '4 sem.', label: 'Délai de livraison' },
      { value: '8', label: 'Pages livrées' },
      { value: '+50%', label: 'Demandes devis ENR' },
      { value: 'RGE', label: 'Certifications affichées' },
    ],
    demoUrl: 'https://electrotechenr.fr',
    accentColor: '#22C55E',
    screenshot: '/screenshots/electrotechenr.png',
  },
  {
    id: 6,
    slug: 'electrotech-13',
    name: 'Electrotech 13',
    category: 'Batiment',
    status: 'live',
    shortDesc: 'Site corporate électricien 40+ ans — confiance, grands comptes et conversion devis.',
    fullDesc:
      'Refonte corporate complète pour un électricien marseillais historique. Mise en avant des 40 ans d\'expérience, références grands comptes (Carrefour, Auchan, La Poste), certifications IRVE et parcours devis/appel optimisé.',
    context:
      'Entreprise BTP reconnue localement mais avec un site daté qui ne reflétait pas son niveau d\'expertise ni ses références nationales.',
    challenge:
      'Rassurer à la fois les particuliers (dépannage, rénovation) et les donneurs d\'ordre (chantiers, maintenance). Afficher la crédibilité sans surcharger.',
    solution:
      'Hero percutant avec preuve sociale (142 avis Google), pages services structurées, bandeau logos clients, timeline 40 ans et double CTA (devis gratuit / appel immédiat).',
    deliveryTime: '5 semaines',
    pages: [
      'Accueil', 'Nos services', 'Dépannage 24h', 'Rénovation électrique',
      'Bornes IRVE', 'Clients & références', 'Certifications', 'Recrutement', 'Devis gratuit', 'Contact',
    ],
    features: [
      'Hero avec preuve sociale (avis Google)',
      'Logos grands comptes (Carrefour, Auchan…)',
      'Pages services par typologie',
      'Certifications IRVE / RGE',
      'Formulaire devis + click-to-call',
      'SEO local Marseille & PACA',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SEO', 'Conversion'],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'API Routes Next.js'],
      tools: ['Vercel', 'Google Analytics', 'Google Business', 'Git'],
    },
    results: [
      { value: '5 sem.', label: 'Délai de livraison' },
      { value: '12', label: 'Pages livrées' },
      { value: '+40%', label: 'Demandes de devis' },
      { value: '5.0', label: 'Note Google' },
    ],
    demoUrl: 'https://electrotech-sud.fr/',
    accentColor: '#0EA5E9',
    screenshot: '/screenshots/electrotech13.png',
    mockupImage: '/mockups/electrotech-laptop.png',
  },
  {
    id: 7,
    slug: 'keryaloc-gestion-locative',
    name: 'Keryaloc',
    category: 'Gestion locative',
    status: 'live',
    shortDesc: 'SaaS location véhicules premium — catalogue, réservation en ligne et gestion des disponibilités.',
    fullDesc:
      'Plateforme SaaS de gestion locative automobile en Algérie. Catalogue véhicules premium, réservation en ligne, calendrier de disponibilités synchronisé, espace client et tableau de bord administrateur.',
    context:
      'Startup de location de véhicules haut de gamme qui gérait les réservations par téléphone et WhatsApp, avec des conflits de disponibilités fréquents.',
    challenge:
      'Automatiser la réservation sans perdre le côté premium de la marque. Gérer les disponibilités en temps réel sur plusieurs véhicules.',
    solution:
      'Application web avec catalogue filtrable, tunnel de réservation (dates, véhicule, options), back-office admin et notifications automatiques. Interface bilingue FR/AR.',
    deliveryTime: '10 semaines (MVP)',
    pages: ['Accueil', 'Catalogue véhicules', 'Fiche véhicule', 'Réservation', 'Espace client', 'Admin dashboard', 'FAQ', 'Contact'],
    features: [
      'Catalogue véhicules avec filtres',
      'Réservation en ligne multi-étapes',
      'Calendrier disponibilités temps réel',
      'Espace client (historique, factures)',
      'Dashboard admin complet',
      'Notifications email automatiques',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'SaaS', 'PostgreSQL', 'Réservation'],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'API REST', 'PostgreSQL'],
      tools: ['Stripe (prévu)', 'Hostinger', 'Git', 'Cron jobs'],
    },
    results: [
      { value: '10 sem.', label: 'Délai MVP' },
      { value: '8', label: 'Modules livrés' },
      { value: '-60%', label: 'Conflits de réservation' },
      { value: '24/7', label: 'Réservation en ligne' },
    ],
    demoUrl: 'https://darkcyan-kudu-431247.hostingersite.com/public/index.php',
    accentColor: '#3B82F6',
    screenshot: '/screenshots/keryaloc.png',
  },
  {
    id: 8,
    slug: 'hotelos-360',
    name: 'HôtelOS 360',
    category: 'Hotel et conciergerie',
    status: 'live',
    shortDesc: 'Site hôtelier premium + moteur de réservation et PMS intégré pour Setif.',
    fullDesc:
      'Vitrine hôtelière complète pour un établissement à Sétif : chambres & suites, formules séjour, expériences locales, journal invités et moteur de recherche de disponibilités connecté à un PMS.',
    context:
      'Hôtel en repositionnement premium qui dépendait des OTAs (Booking) avec des commissions élevées et peu de réservations directes.',
    challenge:
      'Créer une expérience de réservation directe aussi fluide que Booking, tout en mettant en valeur l\'identité locale de l\'hôtel.',
    solution:
      'Site immersif avec galerie chambres, moteur de dispo intégré, composition de séjour personnalisée, espace client et connexion PMS pour synchroniser chambres/tarifs en temps réel.',
    deliveryTime: '12 semaines',
    pages: [
      'Accueil', 'Chambres & suites', 'Formules séjour', 'Restaurant', 'Spa & bien-être',
      'Expériences locales', 'Journal invités', 'Réservation', 'Espace client', 'Contact',
    ],
    features: [
      'Moteur de réservation directe',
      'Connexion PMS (chambres & tarifs)',
      'Galerie immersive chambres',
      'Blog journal invités (SEO)',
      'Multilingue FR/EN/AR',
      'Intégration paiement en ligne',
    ],
    stack: ['Next.js', 'React', 'Node.js', 'PMS', 'Réservation', 'Hotellerie'],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'API REST', 'PostgreSQL', 'Webhooks PMS'],
      tools: ['Stripe', 'Hostinger', 'Google Analytics', 'Git'],
    },
    results: [
      { value: '12 sem.', label: 'Délai de livraison' },
      { value: '10', label: 'Pages livrées' },
      { value: '+25%', label: 'Réservations directes' },
      { value: '-15%', label: 'Commission OTA' },
    ],
    demoUrl: 'https://olive-quetzal-411043.hostingersite.com/public/',
    accentColor: '#0D9488',
    screenshot: '/screenshots/hotel.png',
  },
]

export const MARKETPLACE_CATEGORIES = [
  'Toutes',
  'Medical',
  'Garage et vente vehicule',
  'Batiment',
  'SaaS metier',
  'Gestion locative',
  'Hotel et conciergerie',
] as const

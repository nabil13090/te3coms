import { MarketplaceProject } from '@/types/marketplace'

export const MARKETPLACE_PROJECTS: MarketplaceProject[] = [
  {
    id: 1,
    slug: 'khaki-crane-medical-platform',
    name: 'Plateforme Medicale SaaS',
    category: 'Medical',
    status: 'live',
    shortDesc: 'Plateforme medicale moderne orientee parcours patient et relation centre de soins.',
    fullDesc:
      'Application medicale orientee acquisition locale, presentation des soins et conversion des visiteurs en rendez-vous. Le parcours met en avant la prise en charge, les specialites du centre et des appels a l action clairs pour booster la reservation.',
    stack: ['Next.js', 'TypeScript', 'SEO local', 'UI/UX', 'Formulaires'],
    demoUrl: 'https://khaki-crane-381915.hostingersite.com',
    accentColor: '#7C6EFA',
  },
  {
    id: 2,
    slug: 'cupping-room',
    name: 'Cupping Room',
    category: 'Medical',
    status: 'live',
    shortDesc: 'Site medical premium pour hijama et cupping therapy a Marseille.',
    fullDesc:
      'Positionnement haut de gamme avec hero editorial, argumentaire medical rassurant et CTA de reservation immediats. Le site est construit pour inspirer confiance et augmenter le taux de prise de contact.',
    stack: ['Next.js', 'Landing', 'Conversion', 'Branding'],
    demoUrl: 'https://cupping-room.fr',
    accentColor: '#C084FC',
  },
  {
    id: 3,
    slug: 'attal-pl',
    name: 'Attal P.L. Marketplace',
    category: 'Garage et vente vehicule',
    status: 'live',
    shortDesc: 'Catalogue poids lourds et materiel TP avec fiches vehicules et contact rapide.',
    fullDesc:
      'Marketplace B2B dediee a la vente de poids lourds et materiel TP d occasion. La plateforme structure le stock par categories, valorise les annonces a la une et facilite la conversion vers appel ou demande d information.',
    stack: ['Catalogue', 'Filtres', 'B2B', 'SEO'],
    demoUrl: 'https://azure-wren-478191.hostingersite.com/',
    accentColor: '#F97316',
  },
  {
    id: 4,
    slug: 'gardanne-autos-pieces',
    name: 'Gardanne Autos Pieces',
    category: 'Garage et vente vehicule',
    status: 'live',
    shortDesc: 'Plateforme garage + vehicules + pieces avec mise en avant des services atelier.',
    fullDesc:
      'Vitrine complete pour garage automobile combinant prestations atelier, carrosserie, ventes vehicules et pieces. Le parcours utilisateur relie offre service et stock vehicules pour maximiser les demandes de rendez-vous.',
    stack: ['Automobile', 'Stock', 'Services', 'Landing'],
    demoUrl: 'https://bisque-swan-351965.hostingersite.com/',
    accentColor: '#EF4444',
  },
  {
    id: 5,
    slug: 'mda-batiment',
    name: 'MDA Batiment',
    category: 'Batiment',
    status: 'live',
    shortDesc: 'Plateforme renovation premium avec methode chantier et demande devis.',
    fullDesc:
      'Site oriente generation de leads pour renovation complete. Positionnement premium, preuves sociales, methode en 4 etapes et formulaires detaillees pour qualifier les projets et accelerer la signature.',
    stack: ['Lead Gen', 'BTP', 'Devis', 'CMS-ready'],
    demoUrl: 'https://skyblue-squirrel-200174.hostingersite.com/',
    accentColor: '#F59E0B',
  },
  {
    id: 6,
    slug: 'electrotech-enr',
    name: 'Electrotech ENR',
    category: 'Batiment',
    status: 'live',
    shortDesc: 'Vitrine electricite solaire avec argumentaire expertise et conversion locale.',
    fullDesc:
      'Presence digitale d un acteur electricite et ENR avec structure orientee confiance: certifications, cas clients, avis et call-to-action telephonique. Le site favorise la prise de devis en priorite.',
    stack: ['Energetique', 'SEO local', 'Avis clients'],
    demoUrl: 'https://electrotechenr.fr',
    accentColor: '#22C55E',
  },
  {
    id: 7,
    slug: 'electrotech-13',
    name: 'Electrotech 13',
    category: 'Batiment',
    status: 'live',
    shortDesc: 'Site corporate electricien 40+ ans avec services, certifications et clients grands comptes.',
    fullDesc:
      'Site corporate complet structure pour rassurer les donneurs d ordre: historique, labels, references clients et services detailles. UX orientee conversion immediate vers appel et devis gratuit.',
    stack: ['Corporate', 'Confiance', 'SEO', 'Conversion'],
    demoUrl: 'https://midnightblue-finch-161375.hostingersite.com/',
    accentColor: '#0EA5E9',
  },
  {
    id: 8,
    slug: 'conduite-spring',
    name: 'Conduite Spring SaaS',
    category: 'SaaS metier',
    status: 'live',
    shortDesc: 'Plateforme metier auto-ecole avec tunnel inscription et parcours eleve.',
    fullDesc:
      'SaaS metier pour auto-ecole avec modules de presentation offres, tarification et formulaire d inscription detaille. L architecture est ideale pour evoluer vers un vrai espace eleve connecte.',
    stack: ['SaaS', 'Inscription', 'Formulaires', 'Backoffice-ready'],
    demoUrl: 'https://greenyellow-bat-307784.hostingersite.com/public/inscription/index.php',
    accentColor: '#14B8A6',
  },
  {
    id: 9,
    slug: 'votre-majordome',
    name: 'Votre Majordome',
    category: 'Hotel et conciergerie',
    status: 'live',
    shortDesc: 'Experience digitale luxe pour conciergerie privee et clientele premium.',
    fullDesc:
      'Vitrine lifestyle premium axee image de marque, discretion et accompagnement personnalise. Le design editorial renforce la perception haut de gamme et soutient la prise de contact qualifiee.',
    stack: ['Luxe', 'Branding', 'Storytelling', 'Conciergerie'],
    demoUrl: 'https://magenta-cat-235989.hostingersite.com/',
    accentColor: '#A855F7',
  },
]

export const MARKETPLACE_CATEGORIES = [
  'Toutes',
  'Medical',
  'Garage et vente vehicule',
  'Batiment',
  'SaaS metier',
  'Hotel et conciergerie',
] as const


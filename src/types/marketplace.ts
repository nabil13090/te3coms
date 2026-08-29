export type ProjectStatus = 'live' | 'beta' | 'new'

export interface ProjectTechStack {
  frontend: string[]
  backend: string[]
  cms?: string[]
  tools: string[]
}

export interface ProjectResult {
  value: string
  label: string
}

export interface MarketplaceProject {
  id: number
  slug: string
  name: string
  category:
    | 'Medical'
    | 'Garage et vente vehicule'
    | 'Batiment'
    | 'SaaS metier'
    | 'Gestion locative'
    | 'Hotel et conciergerie'
  status: ProjectStatus
  shortDesc: string
  fullDesc: string
  context: string
  challenge: string
  solution: string
  deliveryTime: string
  pages: string[]
  features: string[]
  stack: string[]
  techStack: ProjectTechStack
  results: ProjectResult[]
  demoUrl: string
  accentColor: string
  screenshot?: string
  mockupImage?: string
}

export type ProjectStatus = 'live' | 'beta' | 'new'

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
  stack: string[]
  demoUrl: string
  accentColor: string
  screenshot?: string
}

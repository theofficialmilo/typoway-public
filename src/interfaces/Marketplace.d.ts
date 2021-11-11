export interface Contributor {
  id: string,
  name: string,
  iconUrl: string,
  email?: string,
  description?: string,
  location?: string,
  socials?: {
    linkedin:string,
    web: string,
    instagram: string,
    facebook: string
  }
}

export interface Template {
  id: string,
  imgUrl: string,
  title: string,
  templateType: number,
  price: number,
  data?: string,
  description?: string,
  account: {
    email?: string,
    iconUrl?: string,
    id: string,
    name: string
  }
}

export interface MarketplaceState {
  selectedId: string | null,
  templates: Template[],
  contributors: Contributor[],
  isLoading: boolean
}
export interface Template {
  id: string,
  name: string,
  templateType: number,
  accountId?: string,
  dataJson?: string,
  dataHtml?: string,
  createdOn?: {
    seconds:number,
    nanoseconds: number
  },
  updatedOn?: {
    seconds: number,
    nanoseconds: number
  }
}

export interface LibraryState{
  isLoading: boolean,
  list: Template[] | undefined
}
export interface Template {
  id?: string,
  name: string,
  templateType: number,
  accountId?: string,
  dataJson?: string,
  dataHtml?: string,
  createdOn?: {
    seconds:number,
    nanoseconds: number
  } | Date,
  updatedOn?: {
    seconds: number,
    nanoseconds: number
  } | Date
}

export interface CreateTemplateForm{
  name: string,
  templateType: number,
  designType?: number,
  dataJson?: string
}

export interface StoredTemplate extends Template{
  id: string
}

export interface LibraryState{
  isLoading: boolean,
  list: Template[] | undefined,
  editorTemplate: Template | null,
  editorIsLoading: boolean
}
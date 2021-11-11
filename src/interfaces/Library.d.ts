//Main data structrures for Template
export interface Template {
  id?: string,
  name: string,
  templateType: number,
  accountId?: string,
  dataJson?: string | null,
  dataHtml?: string | null,
  createdOn?: {
    seconds:number,
    nanoseconds: number
  } | Date,
  updatedOn?: {
    seconds: number,
    nanoseconds: number
  } | Date
}

export interface StoredTemplate extends Template{
  id: string
}

//Create Template 
export interface CreateTemplateForm{
  name: string,
  templateType: number,
  designType?: number,
  dataJson?: string
}

//EditorTemplateData
export interface EditorTemplateData {
  id: string,
  name: string,
  templateType: number
  dataJson: string | null,
  dataHtml: string | null
}

export interface UpdateTemplate  {
  dataJson: string | null,
  dataHtml: string | null
}

export interface LibraryState{
  isLoading: boolean,
  list: Template[] | undefined
}

export interface EditorState {
  isLoading: boolean,
  template: EditorTemplateData | null,
}
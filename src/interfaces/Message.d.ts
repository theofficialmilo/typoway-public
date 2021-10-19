interface Payload {
  partId?: string,
  mimeType: string,
  filename?: string,
  headers: Header[],
  body: {
    size: number,
    data: string
  }
  sizeEstimate: number,
  historyId: string,
  internalDate: string
}

interface Header {
  name: string,
  value:string
}

export interface MessageView {
  headers: Header[],
  data:string
}

export interface Message {
  id: string,
  threadId: string,
  labelIds: string[],
  snippet: string,
  sizeEstimate: number,
  historyId: string,
  internalDate: string,
  payload: Payload
}

export interface MessagesState {
  messages: Message[],
  message: MessageView | null,
  isLoadingList: boolean,
  isLoading: boolean
}
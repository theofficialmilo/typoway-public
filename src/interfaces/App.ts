export interface Alert {
  alert: {
    isOpen: boolean,
    type: string,
    message: string
  }
}

export interface App extends Alert {
  isLoading: boolean
}
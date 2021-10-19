export interface Alert {
  isOpen?: boolean,
  type: string,
  message: any
}

export interface App {
  isLoading: boolean,
  alert: Alert
}
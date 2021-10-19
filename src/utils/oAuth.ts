import { useCallback } from "react"
declare const window: any;

export const initClient = (): any => {
  return window.gapi.client.init({
    apiKey: 'AIzaSyC_YGIEP_sfw3fvgcVzkdmeYCM8Hffhbdk',
    clientId: '277440582792-gr130fr9ptgu2t7tafcq317dceaepe0p.apps.googleusercontent.com',
    scope: "https://mail.google.com/",
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"]
  })
}
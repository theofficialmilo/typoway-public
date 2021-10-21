// Type Helper to shorten namespace interface for Firebase and Gmail Resources

//For Firebase
export type FDocumentData = firebase.default.firestore.DocumentData;
export type FDocumentSnapshot = firebase.default.firestore.DocumentData<>;
export type FQuerySnapshot = firebase.default.firestore.QuerySnapshot;

export type FUserCredential = firebase.default.auth.UserCredential;

//For Gmail
export type GResponse = gapi.client.Response<>;
export type GListMessagesResponse = gapi.client.gmail.ListMessagesResponse;
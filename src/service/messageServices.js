//Sends a request to Gapi to get list of messages that is sent
export const getMessages = () => {
  return window.gapi.client.gmail.users.messages.list({
    userId: "me",
    labelIds: 'SENT',
    maxResults: 10,
  })
}

//Sends a request to Gapi to get messageData according to the id
export const getMessageData = (payload) => {
  return window.gapi.client.gmail.users.messages.get({
    userId: 'me',
    id: payload
  })
}

//Sends a request to Gapi to send an email
export const sendMessage = (payload) => {
  return window.gapi.client.gmail.users.messages.send({
    userId: 'me',
    resource: {
      raw: payload,
    },
  })
}

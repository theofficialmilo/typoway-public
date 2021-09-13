import { Base64 } from "js-base64";
import { templateTypeData } from "./data";

export const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export const decodeHtml = (html) => {
  let text = document.createElement("textarea");
  text.innerHTML = html;
  return text.value;
};

export const removeQuote = (str) => {
  return str.replace(/['"]+/g, "");
};

export const formatDate = (strDate) => {
  const date = new Date(strDate);
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export const getHeader = (headers, name) => {
  const header = headers.find((header) => header.name === name);
  return header !== "" ? header.value : "";
};

export const getMessageBody = (message) => {
  const encodedBody =
    typeof message.parts === "undefined"
      ? message.body.data
      : getHTMLPart(message.parts);

  return Base64.decode(encodedBody);
};

const getHTMLPart = (arr) => {
  for (var x = 0; x <= arr.length; x++) {
    if (typeof arr[x].parts === "undefined") {
      if (arr[x].mimeType === "text/html") {
        return arr[x].body.data;
      }
    } else {
      return getHTMLPart(arr[x].parts);
    }
  }
  return "";
};


export const requestDownload = (resp) => {
  const element = document.createElement('a');
  const file = new Blob([resp.dataHtml], {type: 'text/html'});
  element.href = URL.createObjectURL(file);
  element.download = `${resp.name} Email Template.html`;
  document.body.appendChild(element);
  element.click();
}

export const categoryConverter = (string) => {
  const template = templateTypeData();
  const value = template.indexOf(string.charAt(0).toUpperCase() + string.slice(1))
  return value
}
import { Base64 } from "js-base64";
import { templateTypeData } from "./data";

export const isEmpty = (obj: Object) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export const decodeHtml = (html: any) => {
  let text = document.createElement("textarea");
  text.innerHTML = html;
  return text.value;
};

export const removeQuote = (str: string) => {
  return str.replace(/['"]+/g, "");
};

export const formatDate = (strDate: string) => {
  const date = new Date(strDate);
  const options: any = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export const getHeader = (headers:any, name:any) => {
  const header = headers.find((header:any) => header.name === name);
  return header !== "" ? header.value : "";
};

export const getMessageBody = (message:any) => {
  const encodedBody =
    typeof message.parts === "undefined"
      ? message.body.data
      : getHTMLPart(message.parts);

  return Base64.decode(encodedBody);
};

const getHTMLPart: Function = (arr: any) => {
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

export const requestDownload = (resp:any) => {
  const element = document.createElement('a');
  const file = new Blob([resp.dataHtml], {type: 'text/html'});
  element.href = URL.createObjectURL(file);
  element.download = `${resp.name} Email Template.html`;
  document.body.appendChild(element);
  element.click();
}

export const categoryConverter = (string: string) => {
  const template = templateTypeData;
  const value = template.indexOf(string.charAt(0).toUpperCase() + string.slice(1))
  return value
}
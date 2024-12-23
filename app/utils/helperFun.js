import { baseURL } from "../services/axiosInstance";

export function generateRandomColor() {
  // Generate a random number between 0 and 16777215 (hex: #000000 to #FFFFFF)
  const randomNumber = Math.floor(Math.random() * 16777215);
  // Convert the number to hexadecimal and pad with leading zeros if necessary
  const randomColor = `#${randomNumber.toString(16).padStart(6, "0")}`;
  return randomColor;
}
export function generateImageUrl(url) {
  if (url) {
    return `${baseURL}${url}`;
  }
}

const colors = [
  "#E5D1FA",
  "#F5DAD2",
  "#EDD1E0",
  "#D9EAFD",
  "#B5C0D0",
  "#C3ACD0",
  "#92C7CF",
  "#C1BAA1",
  "#EECAD5",
  "#CB9DF0",
  "#89A8B2",
  "#FFECC8",
  "#E78F81",
  "#95D2B3",
  "#A5B68D",
  "#BB9AB1",
  "#ECCDB4",
  "#FFACAC",
  "#9CAFAA",
  "#FFBF78",
];
export function getRandomColor(index) {
  const randomIndex = Math.floor(Math.random() * colors.length);
  if (index >= 0 && index < colors.length) {
    return colors[index];
  }
  return colors[randomIndex];
}

export const convertJsonToHtml = (data) => {
  let html = "";

  data.forEach((item) => {
    switch (item.type) {
      case "paragraph":
        html += `<p>${convertChildrenToHtml(item.children)}</p>`;
        break;
      case "heading":
        html += `<h${item.level}>${convertChildrenToHtml(item.children)}</h${
          item.level
        }>`;
        break;
      case "list":
        html += `<${
          item.format === "unordered" ? "ul" : "ol"
        }>${convertListChildrenToHtml(item.children)}</${
          item.format === "unordered" ? "ul" : "ol"
        }>`;
        break;
      default:
        break;
    }
  });

  return html;
};

const convertChildrenToHtml = (children) => {
  let html = "";

  children.forEach((child) => {
    switch (child.type) {
      case "text":
        html += formatText(child);
        break;
      case "link":
        html += `<a href="${child.url}">${convertChildrenToHtml(
          child.children
        )}</a>`;
        break;
      default:
        break;
    }
  });

  return html;
};

const convertListChildrenToHtml = (children) => {
  let html = "";

  children.forEach((child) => {
    html += `<li>${convertChildrenToHtml(child.children)}</li>`;
  });

  return html;
};

const formatText = (text) => {
  let formattedText = text.text;

  if (text.bold) {
    formattedText = `<strong>${formattedText}</strong>`;
  }

  if (text.italic) {
    formattedText = `<em>${formattedText}</em>`;
  }

  if (text.underline) {
    formattedText = `<u>${formattedText}</u>`;
  }

  if (text.strikethrough) {
    formattedText = `<strike>${formattedText}</strike>`;
  }

  if (text.code) {
    formattedText = `<code>${formattedText}</code>`;
  }

  return formattedText;
};

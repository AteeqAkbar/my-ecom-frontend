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

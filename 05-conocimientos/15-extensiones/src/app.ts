import description, { appTitle } from "./title.js";

const input = document.getElementById("name") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;

button.addEventListener("click", () => {
  const value = input.value;
  alert("Value = " + value);
});

console.log("TITLE", appTitle);
console.log("DESCRIPTION", description);

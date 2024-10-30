import description, { appTitle } from "./title.js";
const input = document.getElementById("name");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const value = input.value;
    alert("Value = " + value);
});
console.log("TITLE", appTitle);
console.log("DESCRIPTION", description);

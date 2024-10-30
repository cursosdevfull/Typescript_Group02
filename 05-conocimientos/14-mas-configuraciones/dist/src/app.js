import description, { appTitle } from "./title.js";
var input = document.getElementById("name");
var button = document.querySelector("button");
button.addEventListener("click", function () {
    var value = input.value;
    alert("Value = " + value);
});
console.log("TITLE", appTitle);
console.log("DESCRIPTION", description);
//# sourceMappingURL=app.js.map
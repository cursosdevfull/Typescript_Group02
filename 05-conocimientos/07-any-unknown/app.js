var course;
course = true;
course = 1;
course = "TypeScript";
course = [1, 2, 3];
course = { name: "TypeScript" };
course = null;
var user;
user = "TypeScript";
user = { name: "TypeScript" };
if (typeof user === "string") {
    console.log("string", user.toUpperCase());
}
if (typeof user === "object") {
    console.log("object", user.name);
}

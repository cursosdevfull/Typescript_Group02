var courseDev = {
    title: "Curso de Typescript PRO 2020",
    description: "Aprende Typescript desde cero a nivel profesional",
    premium: true,
    student: 50,
    teacher: "Beto Quiroga",
    duration: 50,
    requeriments: ["Conocimientos básicos de programación", "Ganas de aprender"],
};
courseDev.duration = 60;
courseDev.student = 60;
courseDev.requeriments.push("Experiencia con POO");
console.log(courseDev);
var reference = document.querySelector("#title");
reference.innerHTML = courseDev.title;
var list = document.querySelector("#list");
for (var _i = 0, _a = courseDev.requeriments; _i < _a.length; _i++) {
    var requeriment = _a[_i];
    var li = document.createElement("li");
    li.textContent = requeriment;
    list.append(li);
}

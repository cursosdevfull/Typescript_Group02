const courseDev = {
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

const reference = document.querySelector("#title")!;
reference.innerHTML = courseDev.title;

const list = document.querySelector("#list")!;

for (const requeriment of courseDev.requeriments) {
  const li = document.createElement("li");
  li.textContent = requeriment;
  list.append(li);
}

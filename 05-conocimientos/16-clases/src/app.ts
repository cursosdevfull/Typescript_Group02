class Perro {
  raza: string;
  tamano: string;
  color: string;

  constructor(pRaza: string, pTamano: string, pColor: string) {
    console.log("Constructor: Creando un perro");
    this.raza = pRaza;
    this.tamano = pTamano;
    this.color = pColor;
  }

  correr() {
    console.log("El perro está corriendo");
  }

  ladrar() {
    console.log("El perro está ladrando");
  }

  dormir() {
    console.log("El perro está durmiendo");
  }

  comer() {
    console.log("El perro está comiendo");
  }

  toUpper() {
    this.raza = this.raza.toUpperCase();
  }
}

const perro = new Perro("Labrador", "Mediano", "Café");
perro.raza = "Labrador";
perro.toUpper();
console.log(perro.raza); // Desconocida
console.log(perro.tamano); // Mediano
console.log(perro.color); // Café

const perro2 = new Perro("Samoyedo", "Grande", "Blanco");
console.log("raza", perro2.raza); // Desconocida

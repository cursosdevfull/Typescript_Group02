class Perro {
  perroId: number;

  constructor(
    private raza: string,
    private tamano: string,
    private color: string,
    private edad: number
  ) {
    this.perroId = new Date().getTime();
  }

  /*   raza: string;
  tamano: string;
  color: string;
  edad: number;

  constructor(raza: string, tamano: string, color: string, edad: number) {
    this.raza = raza;
    this.tamano = tamano;
    this.color = color;
    this.edad = edad;
    this.perroId = new Date().getTime();
  } */
}

const perro = new Perro("Schnauzer", "Mediano", "Cafe", 5);

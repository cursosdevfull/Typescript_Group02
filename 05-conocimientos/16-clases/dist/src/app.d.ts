declare class Perro {
    raza: string;
    tamano: string;
    color: string;
    constructor(pRaza: string, pTamano: string, pColor: string);
    correr(): void;
    ladrar(): void;
    dormir(): void;
    comer(): void;
    toUpper(): void;
}
declare const perro: Perro;
declare const perro2: Perro;

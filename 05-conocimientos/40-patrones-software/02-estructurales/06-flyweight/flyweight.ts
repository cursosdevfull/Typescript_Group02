export type TCharacterType = "enemy" | "key" | "car";

type TCharacter = {
  getType(): TCharacterType;
  draw(coordX: number, coordY: number, coordZ: number): void;
};

class Character implements TCharacter {
  constructor(private readonly type: TCharacterType) {}

  getType(): TCharacterType {
    return this.type;
  }

  draw(coordX: number, coordY: number, coordZ: number): void {
    const typeCharacter = this.getType();

    switch (typeCharacter) {
      case "enemy":
        console.log(`Drawing enemy at ${coordX}, ${coordY}, ${coordZ}`);
        break;
      case "key":
        console.log(`Drawing key at ${coordX}, ${coordY}, ${coordZ}`);
        break;
      case "car":
        console.log(`Drawing car at ${coordX}, ${coordY}, ${coordZ}`);
        break;
    }
  }
}

export class Flyweight {
  private characters: { [s: string]: TCharacter } = {};

  getCharacter(type: TCharacterType): TCharacter {
    if (!this.characters[type]) {
      this.characters[type] = new Character(type);
    }

    return this.characters[type];
  }
}

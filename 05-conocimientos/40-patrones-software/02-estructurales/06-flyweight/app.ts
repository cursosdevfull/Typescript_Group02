import { Flyweight, TCharacterType } from "./flyweight";

const charactersType = ["enemy", "key", "car"];
const quantityCharacters = 5 + Math.round(Math.random() * 4);

const flyweight = new Flyweight();

for (let ind = 0; ind < quantityCharacters; ind++) {
  const elementNumber = Math.floor(Math.random() * 3);
  const coordX = Math.round(Math.random() * 100);
  const coordY = Math.round(Math.random() * 100);
  const coordZ = Math.round(Math.random() * 100);

  flyweight
    .getCharacter(charactersType[elementNumber] as TCharacterType)
    .draw(coordX, coordY, coordZ);
}

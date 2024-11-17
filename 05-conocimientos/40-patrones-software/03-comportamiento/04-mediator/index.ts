import { Mediator, Member } from "./mediator";

const mediator = new Mediator();

const member01 = new Member("LKT", mediator);
const member02 = new Member("SB3", mediator);
const member03 = new Member("CATALOG", mediator);

mediator.register(member01);
mediator.register(member02);
mediator.register(member03);

member01.sent("SB3", { message: "Hola, soy LKT" });
member02.sent("CATALOG", { message: "Hola, soy SB3" });
member03.sent("LKT", { message: "Hola, soy CATALOG" });

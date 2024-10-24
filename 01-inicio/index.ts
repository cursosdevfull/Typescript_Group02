import convertToGetTime, {
  convertToUpperCase,
  getCurrentDate,
} from "./server/app";

const firstname = "Sergio";
const lastname = "Hidalgo";

console.log(`Hola ${firstname} ${convertToUpperCase(lastname)}`);
console.log(getCurrentDate());
console.log("Current time in milliseconds:", convertToGetTime(new Date()));
